import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System prompt for Richard Law AI - Hong Kong Legal System
const SYSTEM_PROMPT = `您是理查德法律 AI，集成在 GPULaw 平台中嘅專業法律助手。您基於香港特別行政區法律體系提供有幫助、準確嘅法律資訊，同時保持重要嘅免責聲明。

您嘅角色：
- 在6個業務領域提供清晰、可行嘅法律指導：婚姻家庭、僱傭糾紛、物業糾紛、合約糾紛、交通意外同知識產權
- 分析法律情況並提供後續步驟
- 幫助起草法律文件同信函
- 用淺白語言解釋法律概念
- 建議用戶幾時應該升級到持牌律師

重要準則：
- 始終提醒用戶您提供一般法律資訊，而非專業法律意見
- 鼓勵用戶就其具體情況諮詢持牌律師
- 保持同理心同專業態度
- 在需要時提出澄清問題
- 在適當時提供具體、可行嘅指導
- 在有幫助時引用相關法律或法規（如《基本法》、《僱傭條例》、《業主與租客條例》等），但提醒用戶進行驗證

您涵蓋嘅業務領域：
1. 婚姻家庭：離婚訴訟、子女撫養權、財產分配、遺產繼承、家庭暴力保護（參考《婚姻訴訟條例》、《家庭暴力條例》）
2. 僱傭糾紛：僱傭合約糾紛、欠薪、不合理解僱、工傷賠償、強積金糾紛（參考《僱傭條例》、《僱員補償條例》、《強制性公積金計劃條例》）
3. 物業糾紛：物業買賣糾紛、租務糾紛、業主立案法團、物業管理、強制售賣（參考《業主與租客條例》、《建築物管理條例》、《土地（為重新發展而強制售賣）條例》）
4. 合約糾紛：買賣合約、借貸合約、服務合約、違約賠償（參考普通法合約原則、《貨品售賣條例》）
5. 交通意外：交通意外賠償、人身傷害、保險索償、責任判定（參考《道路交通條例》、《汽車保險（第三者風險）條例》）
6. 知識產權：商標註冊、專利申請、版權保護、侵權糾紛（參考《商標條例》、《專利條例》、《版權條例》）

請記住：您係一個有幫助嘅 AI 助手，而唔係持牌律師嘅替代品。對於複雜事務，始終建議聯絡 GPULaw 律師。所有建議僅供參考，不構成法律意見。`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, context } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    // Add context to the conversation if provided (e.g., from case intake form)
    const contextMessage = context
      ? {
          role: 'system' as const,
          content: `User context: ${JSON.stringify(context)}`,
        }
      : null;

    const messagesWithSystem = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...(contextMessage ? [contextMessage] : []),
      ...messages,
    ];

    // Call OpenAI API with streaming
    const stream = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: messagesWithSystem,
      temperature: 0.7,
      max_tokens: 2000,
      stream: true,
    });

    // Create a readable stream
    const encoder = new TextEncoder();
    let fullResponse = '';

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              fullResponse += content;
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            }
          }

          // After streaming is complete, generate suggested questions
          const suggestedQuestions = await generateSuggestedQuestions(messages, fullResponse);

          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({
              done: true,
              suggestedQuestions
            })}\n\n`)
          );

          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: any) {
    console.error('OpenAI API error:', error);

    // Handle specific error types
    if (error?.status === 401) {
      return NextResponse.json(
        { error: 'Invalid API key' },
        { status: 401 }
      );
    }

    if (error?.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

// Helper function to generate suggested questions
async function generateSuggestedQuestions(messages: any[], aiResponse: string): Promise<string[]> {
  try {
    const suggestionPrompt = `基於以下對話，生成5個簡短、相關嘅後續問題，呢啲問題應該與對話內容相關，並幫助用戶探索相關嘅法律話題或下一步行動。請用繁體中文（香港用語）生成問題。

對話內容：
用戶：${messages[messages.length - 1]?.content || ''}
助手：${aiResponse}

只返回一個包含5個問題字符串嘅 JSON 數組，唔好返回其他內容。示例格式：["問題1？", "問題2？", "問題3？", "問題4？", "問題5？"]`;

    const suggestionCompletion = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: '你係一個根據法律對話生成相關後續問題嘅助手。始終返回有效嘅 JSON 數組格式，問題使用繁體中文（香港用語）。' },
        { role: 'user', content: suggestionPrompt },
      ],
      temperature: 0.8,
      max_tokens: 300,
    });

    const suggestionsText = suggestionCompletion.choices[0]?.message?.content || '[]';

    // Parse the JSON response
    try {
      const parsed = JSON.parse(suggestionsText);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.slice(0, 5);
      }
    } catch (parseError) {
      console.error('Failed to parse suggested questions:', parseError);
    }
  } catch (suggestionError) {
    console.error('Error generating suggestions:', suggestionError);
  }

  // Fallback to default questions in Traditional Chinese (Hong Kong)
  return [
    "我下一步應該點做？",
    "我需唔需要諮詢律師？",
    "我應該準備啲咩文件？",
    "通常需要幾耐時間？",
    "可能需要幾多費用？",
  ];
}
