import React from 'react';

const Landing = () => {
  return (
    <div className="font-['Poppins'] text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
            Storifyy
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 font-medium transition">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 font-medium transition">Pricing</a>
            <button className="px-6 py-2 text-purple-600 hover:bg-gray-50 rounded-lg font-semibold transition">Sign In</button>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-900 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
              Store Everything. Access Instantly.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Next-generation cloud storage with military-grade security. Upload, sync, and share files at blazing speeds.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-900 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition">
                Try Free for 30 Days
              </button>
              <button className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition">
                See How It Works
              </button>
            </div>
            <p className="text-gray-500">
              ✓ No credit card required • 25GB free storage • Cancel anytime
            </p>
          </div>
          
          <div className="relative h-[500px]">
            <div className="absolute top-[10%] left-[10%] bg-white px-6 py-4 rounded-xl shadow-lg font-semibold text-lg animate-float">
              📄 Documents
            </div>
            <div className="absolute top-[50%] right-[10%] bg-white px-6 py-4 rounded-xl shadow-lg font-semibold text-lg animate-float-delayed">
              🎬 Videos
            </div>
            <div className="absolute bottom-[15%] left-[20%] bg-white px-6 py-4 rounded-xl shadow-lg font-semibold text-lg animate-float-slow">
              🎨 Design Files
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] opacity-30 animate-float-gentle">
              ☁️
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Everything You Need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Bank-Level Security</h3>
              <p className="text-gray-600 leading-relaxed">End-to-end encryption keeps your files safe and private</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">Upload and sync files in seconds with our optimized infrastructure</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Access Anywhere</h3>
              <p className="text-gray-600 leading-relaxed">Available on web, mobile, and desktop - your files follow you</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Easy Sharing</h3>
              <p className="text-gray-600 leading-relaxed">Share files and folders with anyone using secure links</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-purple-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">Free</h3>
              <div className="text-5xl font-bold text-purple-600 mb-8">
                $0<span className="text-base text-gray-500 font-normal">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="border-b border-gray-200 pb-3">✓ 15GB Storage</li>
                <li className="border-b border-gray-200 pb-3">✓ Basic Sharing</li>
                <li className="pb-3">✓ Mobile Apps</li>
              </ul>
              <button className="w-full py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition">
                Get Started
              </button>
            </div>
            
            <div className="bg-white p-10 rounded-2xl border-4 border-purple-600 relative transform scale-105 hover:shadow-2xl hover:-translate-y-2 transition">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-900 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-semibold mb-4">Pro</h3>
              <div className="text-5xl font-bold text-purple-600 mb-8">
                $9.99<span className="text-base text-gray-500 font-normal">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="border-b border-gray-200 pb-3">✓ 2TB Storage</li>
                <li className="border-b border-gray-200 pb-3">✓ Advanced Sharing</li>
                <li className="border-b border-gray-200 pb-3">✓ Priority Support</li>
                <li className="pb-3">✓ Version History</li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-900 text-white rounded-lg font-semibold hover:shadow-lg transition">
                Start Free Trial
              </button>
            </div>
            
            <div className="bg-white p-10 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition">
              <h3 className="text-2xl font-semibold mb-4">Business</h3>
              <div className="text-5xl font-bold text-purple-600 mb-8">
                $19.99<span className="text-base text-gray-500 font-normal">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-600">
                <li className="border-b border-gray-200 pb-3">✓ Unlimited Storage</li>
                <li className="border-b border-gray-200 pb-3">✓ Team Collaboration</li>
                <li className="border-b border-gray-200 pb-3">✓ Admin Controls</li>
                <li className="pb-3">✓ 24/7 Support</li>
              </ul>
              <button className="w-full py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400 text-center">
        <p>© 2024 Storifyy. Your data, your control. Deployed via AWS S3 🚀</p>
      </footer>
    </div>
  );
};

export default Landing;
