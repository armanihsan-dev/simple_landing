import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <nav className="navbar">
        <div className="logo">CloudVault</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <button className="btn-secondary">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Your Files, Anywhere, Anytime</h1>
          <p>Secure cloud storage with lightning-fast sync. Store, share, and collaborate with ease.</p>
          <div className="hero-buttons">
            <button className="btn-large">Start Free Trial</button>
            <button className="btn-outline">Watch Demo</button>
          </div>
          <p className="hero-note">✓ No credit card required • 15GB free storage</p>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">📁 Documents</div>
          <div className="floating-card card-2">🖼️ Photos</div>
          <div className="floating-card card-3">🎵 Music</div>
          <div className="cloud-icon">☁️</div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Everything You Need</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Bank-Level Security</h3>
            <p>End-to-end encryption keeps your files safe and private</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Upload and sync files in seconds with our optimized infrastructure</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Access Anywhere</h3>
            <p>Available on web, mobile, and desktop - your files follow you</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Easy Sharing</h3>
            <p>Share files and folders with anyone using secure links</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Simple, Transparent Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Free</h3>
            <div className="price">$0<span>/month</span></div>
            <ul>
              <li>✓ 15GB Storage</li>
              <li>✓ Basic Sharing</li>
              <li>✓ Mobile Apps</li>
            </ul>
            <button className="btn-outline">Get Started</button>
          </div>
          <div className="pricing-card featured">
            <div className="badge">Popular</div>
            <h3>Pro</h3>
            <div className="price">$9.99<span>/month</span></div>
            <ul>
              <li>✓ 2TB Storage</li>
              <li>✓ Advanced Sharing</li>
              <li>✓ Priority Support</li>
              <li>✓ Version History</li>
            </ul>
            <button className="btn-primary">Start Free Trial</button>
          </div>
          <div className="pricing-card">
            <h3>Business</h3>
            <div className="price">$19.99<span>/month</span></div>
            <ul>
              <li>✓ Unlimited Storage</li>
              <li>✓ Team Collaboration</li>
              <li>✓ Admin Controls</li>
              <li>✓ 24/7 Support</li>
            </ul>
            <button className="btn-outline">Contact Sales</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 CloudVault. Secure storage for everyone.</p>
      </footer>
    </div>
  );
};

export default Landing;
