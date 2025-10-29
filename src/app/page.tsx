import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="container cluster" style={{ justifyContent: 'space-between' }}>
          <div className="cluster">
            <Image src="/icon.svg" alt="AladdinNow Logo" width={120} height={40} style={{ height: '40px', width: 'auto' }} />
            <div className="input-group" style={{ width: '400px', maxWidth: '100%' }}>
              <input 
                type="search" 
                className="input" 
                placeholder="Search products, suppliers..." 
                style={{ height: '40px' }}
              />
            </div>
          </div>
          <div className="cluster gap-4">
            <button className="btn btn-ghost" style={{ color: 'white' }}>Sign In</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Category Navigation */}
      <div className="category-rail">
        <div className="container">
          <div className="tabbar">
            <button className="tab active">All Categories</button>
            <button className="tab">Electronics</button>
            <button className="tab">Machinery</button>
            <button className="tab">Textiles</button>
            <button className="tab">Request Quote</button>
            <button className="tab">Trade Services</button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #054a4e 0%, #02c4cb 100%)', color: 'white', paddingBlock: 'var(--space-16)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--space-12)' }}>
            <div className="stack">
              <h1 className="h1" style={{ color: 'white' }}>Connect with Global Suppliers</h1>
              <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '500px' }}>
                Source quality products, negotiate better prices, and grow your business with AladdinNow B2B marketplace.
              </p>
              <div className="cluster mt-6">
                <button className="btn btn-primary btn-lg">Start Sourcing</button>
                <button className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                  Learn More
                </button>
              </div>
            </div>
            <div className="center" style={{ minHeight: '300px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Hero Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-alt">
        <div className="container">
          <div className="stack">
            <div className="text-center mb-6">
              <h2 className="h2">Browse by Category</h2>
              <p className="text-muted mt-2">Discover products from verified suppliers</p>
            </div>
            <div className="grid grid-4">
              {['Electronics', 'Machinery', 'Textiles', 'Agriculture', 'Chemicals', 'Automotive', 'Construction', 'Packaging'].map((category) => (
                <div key={category} className="card" style={{ cursor: 'pointer', padding: 'var(--space-6)', textAlign: 'center' }}>
                  <div className="center" style={{ width: '64px', height: '64px', background: 'var(--color-primary-50)', borderRadius: 'var(--radius-md)', margin: '0 auto var(--space-3)' }}>
                    <span style={{ fontSize: '32px' }}>📦</span>
                  </div>
                  <h3 className="h5">{category}</h3>
                  <p className="text-sm text-muted mt-2">1000+ products</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="stack">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h2 className="h2">Trending Products</h2>
                <p className="text-muted mt-2">Popular items from verified suppliers</p>
              </div>
              <button className="btn btn-ghost">View All →</button>
            </div>
            <div className="grid grid-4 mt-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="card product-tile">
                  <div style={{ aspectRatio: '1', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }}></div>
                  <div className="card-body">
                    <h3 className="title">Industrial LED Light Fixture</h3>
                    <p className="subtitle mt-2">LED Lighting Solutions Co.</p>
                    <div className="cluster mt-3" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div className="price text-2xl">$45.00</div>
                        <div className="moq text-muted">MOQ: 100 pcs</div>
                      </div>
                      <button className="btn btn-sm btn-primary">Inquire</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-alt">
        <div className="container">
          <div className="grid grid-4">
            <div className="stat-card text-center">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Verified Suppliers</div>
            </div>
            <div className="stat-card text-center">
              <div className="stat-value">2M+</div>
              <div className="stat-label">Products Listed</div>
            </div>
            <div className="stat-card text-center">
              <div className="stat-value">150+</div>
              <div className="stat-label">Countries Served</div>
            </div>
            <div className="stat-card text-center">
              <div className="stat-value">99.8%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
        <div className="container">
          <div className="text-center stack">
            <h2 className="h2" style={{ color: 'white' }}>Ready to Start Sourcing?</h2>
            <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto' }}>
              Join thousands of businesses already sourcing with AladdinNow
            </p>
            <div className="cluster mt-6" style={{ justifyContent: 'center' }}>
              <button className="btn btn-primary btn-lg">Create Free Account</button>
              <button className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', padding: 'var(--space-12) 0 var(--space-6)' }}>
        <div className="container">
          <div className="grid grid-4 mb-8">
            <div>
              <h4 className="h5 mb-4">About AladdinNow</h4>
              <p className="text-sm text-muted">Your trusted B2B marketplace connecting buyers and suppliers worldwide.</p>
            </div>
            <div>
              <h4 className="h5 mb-4">Quick Links</h4>
              <div className="stack" style={{ gap: 'var(--space-2)' }}>
                <a href="#" className="text-sm">About Us</a>
                <a href="#" className="text-sm">How It Works</a>
                <a href="#" className="text-sm">Supplier Directory</a>
                <a href="#" className="text-sm">Trade Services</a>
              </div>
            </div>
            <div>
              <h4 className="h5 mb-4">For Buyers</h4>
              <div className="stack" style={{ gap: 'var(--space-2)' }}>
                <a href="#" className="text-sm">Request Quotation</a>
                <a href="#" className="text-sm">Product Search</a>
                <a href="#" className="text-sm">Trade Assurance</a>
                <a href="#" className="text-sm">Buyer Protection</a>
              </div>
            </div>
            <div>
              <h4 className="h5 mb-4">For Suppliers</h4>
              <div className="stack" style={{ gap: 'var(--space-2)' }}>
                <a href="#" className="text-sm">List Products</a>
                <a href="#" className="text-sm">Membership Plans</a>
                <a href="#" className="text-sm">Supplier Resources</a>
                <a href="#" className="text-sm">Success Stories</a>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)', paddingTop: 'var(--space-4)' }}>
            <p className="text-sm text-muted">© 2025 AladdinNow. All rights reserved.</p>
            <div className="cluster">
              <a href="#" className="text-sm">Privacy Policy</a>
              <a href="#" className="text-sm">Terms of Service</a>
              <a href="#" className="text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
