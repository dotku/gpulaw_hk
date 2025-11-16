'use client';

export default function Pricing() {
  const plans = [
    {
      name: "基礎版",
      price: "$29",
      period: "/月",
      description: "滿足日常需求嘅基本 AI 法律工具",
      features: [
        "無限次 AI 法律諮詢",
        "基本文件生成",
        "法律問題分類",
        "覆蓋6個業務領域",
        "電郵支援",
        "法律知識庫訪問",
      ],
      notIncluded: [
        "律師諮詢",
        "律師文件審查",
        "法庭代理",
      ],
      buttonText: "開始使用基礎版",
      popular: false,
      color: "from-gray-600 to-gray-800",
      borderColor: "border-gray-200",
    },
    {
      name: "專業版",
      price: "$99",
      period: "/月",
      description: "AI 協助加有限律師服務",
      features: [
        "包含基礎版所有功能，另加：",
        "每月2次律師諮詢（每次30分鐘）",
        "律師文件審查（最多5頁）",
        "高級 AI 文件生成",
        "優先電郵同即時聊天支援",
        "額外律師服務時間折扣",
      ],
      notIncluded: [
        "無限次律師諮詢",
        "法庭代理",
      ],
      buttonText: "獲取專業版",
      popular: true,
      color: "from-blue-600 to-blue-800",
      borderColor: "border-blue-300",
    },
    {
      name: "高級版",
      price: "$299",
      period: "/月",
      description: "全方位 AI + 律師保護，讓您安心無憂",
      features: [
        "包含專業版所有功能，另加：",
        "無限次律師諮詢",
        "無限次文件審查",
        "專屬案件經理",
        "法庭代理（每年最多2個案件）",
        "24/7 電話支援",
        "家庭成員覆蓋（最多4人）",
      ],
      notIncluded: [],
      buttonText: "升級高級版",
      popular: false,
      color: "from-amber-600 to-amber-800",
      borderColor: "border-amber-300",
    },
  ];

  return (
    <section id="membership" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            選擇您嘅保護級別
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            從純 AI 協助到全面律師覆蓋——搵到適合您需求嘅方案
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl ${
                plan.popular ? 'border-4 ' + plan.borderColor + ' transform scale-105' : 'border-2 ' + plan.borderColor
              } overflow-hidden hover:shadow-2xl transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-bl-xl font-bold text-sm shadow-lg">
                    ⭐ 最受歡迎
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2 text-sm sm:text-base">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 sm:mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className={`text-gray-700 ${feature.includes('Everything') ? 'font-semibold' : ''}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 opacity-50">
                        <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-400 line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 sm:py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg ${
                    plan.popular ? 'ring-4 ring-blue-200' : ''
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Money-Back Guarantee */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✓</div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">30日退款保證</h3>
            <p className="text-base sm:text-lg lg:text-xl text-green-100 mb-4 sm:mb-6">
              無風險試用 GPULaw。如果您喺前30日內唔完全滿意，
              我哋將退還您嘅會員費——無需任何理由。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>無合約約束</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>隨時取消</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>全額退款</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-10 px-2">常見問題</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border-2 border-gray-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">我可唔可以升級或降級我嘅方案？</h4>
              <p className="text-sm sm:text-base text-gray-600">當然可以！您可以隨時更改會員級別。升級立即生效，降級將喺下一個賬單週期生效。</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border-2 border-gray-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">律師喺我所在地區有執照嗎？</h4>
              <p className="text-sm sm:text-base text-gray-600">係嘅，我哋為您配對喺香港持有執照且喺相關業務領域經驗豐富嘅律師。</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border-2 border-gray-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">如果我需要更多律師服務時間點算？</h4>
              <p className="text-sm sm:text-base text-gray-600">會員可以以折扣小時費率獲得超出其方案限制嘅額外律師諮詢服務。</p>
            </div>
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border-2 border-gray-200">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">我嘅資訊會保密嗎？</h4>
              <p className="text-sm sm:text-base text-gray-600">絕對保密。所有通信均受律師-客戶特權同我哋嚴格嘅私隱政策保護。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
