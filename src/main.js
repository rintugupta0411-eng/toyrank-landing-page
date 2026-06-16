import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav class="container">
      <div class="logo">ToyRank <span>PPC</span></div>
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">Why Us</a></li>
        <li><a href="#contact" class="btn btn-outline">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="hero" class="hero">
      <div class="container">
        <h1>Data-Driven Amazon PPC <br>for <span>Toy Brands</span></h1>
        <p>Scale your toy brand with category-specific expertise and order-driven optimization. We don't just manage ads; we build market leaders.</p>
        <div class="cta-group">
          <a href="#contact" class="btn btn-primary">Get a Category Audit</a>
          <a href="#services" class="btn btn-secondary">View Services</a>
        </div>
      </div>
    </section>

    <section id="services" class="services">
      <div class="container">
        <h2 class="section-title">Our Service Tiers</h2>
        <div class="service-grid">
          <div class="service-card">
            <h3>The Category Audit</h3>
            <p class="tagline">The Strategic Diagnostic</p>
            <p>Identify hidden waste and immediate growth opportunities in your existing campaigns.</p>
            <ul>
              <li>Wasted Spend Audit</li>
              <li>Placement Efficiency Report</li>
              <li>Target ACOS Gap Analysis</li>
            </ul>
            <span class="price">$499 (One-time)</span>
            <a href="#contact" class="btn btn-small">Book Audit</a>
          </div>
          <div class="service-card highlighted">
            <h3>The Launch Rocket</h3>
            <p class="tagline">The ASIN Accelerator</p>
            <p>Secure high-intent placements and build rapid sales velocity for new launches or seasonal peaks.</p>
            <ul>
              <li>Full Campaign Architecture</li>
              <li>Daily Bid Management</li>
              <li>Keyword & Competitor Harvesting</li>
            </ul>
            <span class="price">$1,250 per ASIN</span>
            <a href="#contact" class="btn btn-primary btn-small">Start Launch</a>
          </div>
          <div class="service-card">
            <h3>Managed Growth</h3>
            <p class="tagline">Scalable ROI Management</p>
            <p>Hands-on optimization to scale profitable ad spend and maintain healthy ACOS.</p>
            <ul>
              <li>3x Weekly manual adjustments</li>
              <li>Placement Optimization</li>
              <li>Negative Keyword Management</li>
            </ul>
            <span class="price">Starting at $1,500/mo</span>
            <a href="#contact" class="btn btn-small">Inquire Now</a>
          </div>
          <div class="service-card">
            <h3>Category Dominance</h3>
            <p class="tagline">The Market Leader Program</p>
            <p>Aggressive market share acquisition and category leadership for high-volume sellers.</p>
            <ul>
              <li>Daily oversight & adjustments</li>
              <li>Advanced Conquesting</li>
              <li>Organic Rank Integration</li>
            </ul>
            <span class="price">Custom Retainer</span>
            <a href="#contact" class="btn btn-small">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about">
      <div class="container">
        <div class="about-content">
          <h2>Why ToyRank PPC?</h2>
          <p>The Toys category is unique. Seasonality is extreme, and search behavior is distinct. We don't use "set and forget" software. We use a human-led, data-backed methodology that prioritizes <strong>orders</strong> and <strong>rank</strong> over vanity metrics like CTR.</p>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-value">Toys</span>
              <span class="stat-label">Category Focus</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">Data</span>
              <span class="stat-label">Driven Optimization</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">ROI</span>
              <span class="stat-label">Obsessed</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="cta" class="cta">
      <div class="container text-center">
        <h2>Ready to scale your toy brand?</h2>
        <p>Let’s talk about your ASINs and build a roadmap for growth.</p>
        <a href="#contact" class="btn btn-primary btn-large">Book Your Free Consultation</a>
      </div>
    </section>
  </main>

  <footer id="contact">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">ToyRank <span>PPC</span></div>
          <p>Category-specific Amazon PPC management for toy brands.</p>
        </div>
        <div class="footer-links">
          <h4>Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">Why Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contact</h4>
          <p>Email: hello@toyrankppc.com</p>
          <p>Scale your brand today.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 ToyRank PPC. All rights reserved.</p>
      </div>
    </div>
  </footer>
`
