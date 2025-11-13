# GPULaw - AI-Powered Legal Membership Platform

GPULaw is a modern legal membership platform that combines advanced artificial intelligence tools with access to experienced attorneys to provide comprehensive legal protection for individuals.

## Overview

GPULaw integrates AI-driven self-service legal guidance (such as document preparation, legal issue triage, and automated insights) with the option to consult real lawyers when needed, making legal support more accessible and affordable than traditional models.

## Features

### 🤖 AI-Powered Legal Tools
- **24/7 AI Legal Assistance**: Get instant answers to legal questions anytime
- **Document Generation**: Automated creation of contracts, wills, demand letters, and more
- **Case Analysis**: AI-powered triage and assessment of your legal situation
- **Legal Research**: Access to relevant case law and legal precedents

### 👨‍⚖️ Licensed Attorney Network
- **Attorney Consultations**: Connect with licensed lawyers when you need human expertise
- **Document Review**: Get professional review of your legal documents
- **Court Representation**: Premium members get court representation included
- **State-Licensed Attorneys**: All attorneys are licensed in their respective jurisdictions

### 📋 Practice Areas Covered
1. **Family Law** - Divorce, child custody, child support, alimony, adoption, domestic violence
2. **Consumer & Debt** - Credit card debt, bankruptcy, identity theft, payday loans
3. **Housing & Landlord-Tenant** - Evictions, rent disputes, security deposits, housing conditions
4. **Wills, Estates & Probate** - Wills, trusts, power of attorney, estate administration
5. **Immigration** - Green cards, asylum, citizenship, deportation defense, work visas
6. **Traffic Cases** - Parking tickets, traffic violations, DUIs

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Navigate to the project directory
cd gpulaw

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
gpulaw/
├── app/
│   ├── page.tsx          # Main homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles with Tailwind
├── components/
│   ├── Hero.tsx          # Hero section with AI + Attorney positioning
│   ├── LegalCategories.tsx  # 6 practice areas showcase
│   ├── HowItWorks.tsx    # Process flow explanation
│   ├── Pricing.tsx       # Membership tiers (Basic, Professional, Premium)
│   ├── CaseIntakeForm.tsx   # AI-powered case submission form
│   └── Footer.tsx        # Footer with legal disclaimers
└── public/              # Static assets

```

## Membership Tiers

### Basic - $29/month
- Unlimited AI legal consultations
- Basic document generation
- Legal issue triage
- 6 practice area coverage

### Professional - $99/month ⭐
- Everything in Basic
- 2 attorney consultations/month
- Attorney document review
- Priority support

### Premium - $299/month
- Everything in Professional
- Unlimited attorney consultations
- Court representation (2 cases/year)
- Family coverage (up to 4 members)
- 24/7 phone support

## Key Components

### Hero Section
- Prominent GPULaw branding with blue/gold gradient
- Clear value proposition: "AI-Powered + Attorney Access"
- High-contrast CTAs for maximum accessibility
- Trust indicators (24/7 AI, Licensed Attorneys, 6+ Practice Areas)

### Legal Categories
- Interactive cards for each practice area
- Hover effects and visual engagement
- Clear description of services in each category
- "AI Guidance + Attorney" indicators

### How It Works
- 4-step process flow with visual icons
- AI vs Attorney comparison chart
- Clear guidance on when to use each resource
- Document type examples

### Pricing
- 3-tier membership structure
- Feature comparison with checkmarks/crosses
- 30-day money-back guarantee
- FAQ section for common questions

### Case Intake Form
- Comprehensive legal issue submission
- Category selection for 6 practice areas
- Urgency level indicators
- Confidentiality assurance

### Footer
- Complete practice area links
- Contact information
- **Important Legal Disclaimer** (highlighted)
- Social media links
- Privacy policy links

## Legal Disclaimer

**GPULaw is not a law firm** and does not provide legal advice. The AI-powered tools and information provided are for general informational purposes only. Use of GPULaw does not create an attorney-client relationship except when connected with a licensed attorney through our platform.

## Design Philosophy

### High Contrast for Accessibility
All buttons and text follow WCAG AAA guidelines:
- Dark backgrounds (gray-900/black) for white text
- Maximum contrast ratios for readability
- Bold, clear typography

### Professional Legal Aesthetic
- Blue gradient for trust and professionalism
- Gold accents for premium positioning
- Clean, modern interface
- Clear information hierarchy

### Mobile-First Responsive
- Optimized for all screen sizes
- Touch-friendly interface
- Responsive grid layouts

## Deployment

This project is configured for deployment on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Add your environment variables here
NEXT_PUBLIC_API_URL=your_api_url
```

## Future Enhancements

- [ ] Backend API integration for case submissions
- [ ] User authentication and dashboard
- [ ] Attorney matching algorithm
- [ ] Real-time chat with AI assistant
- [ ] Document upload and storage
- [ ] Payment processing integration
- [ ] Attorney portal for case management
- [ ] Advanced legal research tools
- [ ] Client case tracking
- [ ] Multilingual support

## Contributing

This is a proprietary project. For questions or support, contact: support@gpulaw.com

## License

Copyright © 2025 GPULaw Technologies, Inc. All rights reserved.

---

**Built with ⚖️ by GPULaw** - Making legal protection accessible and affordable for everyone.
