export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Describe Your Legal Issue",
      description: "Tell GPULaw about your situation using our simple intake form. Our AI analyzes your case and determines the best path forward.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Get Instant AI Guidance",
      description: "Receive immediate legal insights, relevant case law, and actionable advice. Our AI helps you understand your rights and options clearly.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "AI Document Preparation",
      description: "Need legal documents? Our AI generates customized forms, contracts, letters, and filings tailored to your specific situation.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      title: "Connect with an Attorney",
      description: "For complex matters or when you need human expertise, seamlessly connect with a licensed attorney in your practice area.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
        </svg>
      ),
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How GPULaw Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered self-service to attorney consultations — your path to legal protection
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-[84px] top-[120px] w-1 h-[calc(100%+3rem)] bg-gradient-to-b from-blue-200 to-transparent"></div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Number and Icon */}
                <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                  <div className={`relative w-40 h-40 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300`}>
                    <div className="absolute -top-4 -right-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl border-4 border-gray-100">
                      <span className="text-2xl font-black text-gray-900">{step.number}</span>
                    </div>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-10 bg-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Additional features for specific steps */}
                  {index === 1 && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-semibold">Case Analysis</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-semibold">Legal Research</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-semibold">Options Review</span>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {['Contracts', 'Wills', 'Demand Letters', 'Court Forms', 'Affidavits', 'Notices'].map((doc, i) => (
                        <span key={i} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold border-2 border-green-200">
                          {doc}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* When to Use AI vs Attorney */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">AI Assistant Best For:</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Quick legal questions',
                'Document templates & drafting',
                'Understanding your rights',
                'Legal research & information',
                'Simple contract review',
                'Legal procedure guidance',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border-2 border-amber-200 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Attorney Needed For:</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Court representation',
                'Complex negotiations',
                'High-stakes legal matters',
                'Litigation & lawsuits',
                'Legal strategy & planning',
                'Personalized legal advice',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
