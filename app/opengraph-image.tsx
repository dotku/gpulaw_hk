import { ImageResponse } from 'next/og'

export const alt = 'GPULaw - AI-Powered Legal Assistance'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #d97706 100%)',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: 140,
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #ffffff 0%, #e0e7ff 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-0.05em',
            }}
          >
            GPULaw
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 42,
            color: 'white',
            marginBottom: '20px',
            opacity: 0.95,
          }}
        >
          ⚖️ AI-Powered + 👨‍⚖️ Attorney Access
        </div>
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Affordable legal membership combining advanced AI tools with experienced attorneys
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '50px',
            gap: '30px',
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '20px 40px',
              borderRadius: '12px',
              fontSize: 24,
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            24/7 AI Support
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '20px 40px',
              borderRadius: '12px',
              fontSize: 24,
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Licensed Attorneys
          </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.2)',
              padding: '20px 40px',
              borderRadius: '12px',
              fontSize: 24,
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            6 Practice Areas
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
