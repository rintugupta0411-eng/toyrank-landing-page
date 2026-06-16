import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav class="container">
      <div class="logo">ToyRank <span>PPC</span></div>
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#why-us">Why Us</a></li>
        <li><a href="#contact" class="btn btn-outline">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="hero" class="hero">
      <div class="container">
        <h1>Amazon PPC Built for <span>Toy Brands</span></h1>
        <p>Stop guessing. Start scaling. We use category-specific data and order-driven bidding to turn your ad spend into profitable growth.</p>
        <div class="cta-group">
          <a href="#contact" class="btn btn-primary">Get Your Free Mini-Audit</a>
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
            <p>Identify hidden waste and immediate growth opportunities in your existing campaigns. Includes a Wasted Spend Audit and Placement Efficiency Report.</p>
            <span class="price">$499</span>
            <p class="price-note">(100% credited back toward your first month of management)</p>
            <a href="#contact" class="btn btn-small">Book Audit</a>
          </div>
          <div class="service-card highlighted">
            <h3>The Launch Rocket</h3>
            <p class="tagline">The ASIN Accelerator</p>
            <p>Secure high-intent placements and build rapid sales velocity for new launches or seasonal peaks. Includes full campaign architecture and high-frequency daily bid management.</p>
            <span class="price">$1,250 per ASIN</span>
            <a href="#contact" class="btn btn-primary btn-small">Start Launch</a>
          </div>
          <div class="service-card">
            <h3>Managed Growth</h3>
            <p class="tagline">Scalable ROI Management</p>
            <p>Hands-on optimization to scale profitable ad spend. Includes 3x weekly manual adjustments, placement re-balancing, and automated performance dashboards.</p>
            <span class="price">Starting at $1,500/mo</span>
            <a href="#contact" class="btn btn-small">Inquire Now</a>
          </div>
          <div class="service-card">
            <h3>Category Dominance</h3>
            <p class="tagline">The Market Leader Program</p>
            <p>Aggressive market share acquisition for high-volume sellers. Advanced competitor conquesting, daily oversight, and organic rank integration.</p>
            <span class="price">$3,500/mo + 2%</span>
            <p class="price-note">(of total PPC-attributed sales)</p>
            <a href="#contact" class="btn btn-small">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <section id="how-it-works" class="how-it-works">
      <div class="container">
        <h2 class="section-title">How It Works</h2>
        <div class="steps-grid">
          <div class="step">
            <div class="step-number">1</div>
            <h4>Audit</h4>
            <p>We tear down your existing campaigns to find "leakage" (like high-spend, zero-conversion keywords) and placement inefficiencies.</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h4>Optimize</h4>
            <p>We apply our proprietary bid framework to align spend with your profitability goals based on price and conversion rate.</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h4>Scale</h4>
            <p>We aggressively win "Top of Search" placements where toy buyers convert best, driving both ad sales and organic rank.</p>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <h4>Report</h4>
            <p>You get a clear, data-backed dashboard showing exactly how your spend is moving the needle on orders and rank.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="why-us" class="why-us">
      <div class="container">
        <h2 class="section-title">Why ToyRank?</h2>
        <div class="features-grid">
          <div class="feature">
            <h4>Toy Category Expertise</h4>
            <p>We understand the extreme seasonality and distinct search behavior of the toy market. We don't do "set and forget."</p>
          </div>
          <div class="feature">
            <h4>Order-Driven Methodology</h4>
            <p>We prioritize sales velocity and rank movement over vanity metrics like impressions or CTR.</p>
          </div>
          <div class="feature">
            <h4>Placement-First Strategy</h4>
            <p>We know "Top of Search" often converts up to 10x better than "Product Pages" for toys. We optimize your bids accordingly.</p>
          </div>
          <div class="feature">
            <h4>Human-Led, Data-Backed</h4>
            <p>No black-box software. Real specialists using a proven mathematical framework to manage your account.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="testimonials">
      <div class="container">
        <h2 class="section-title">What Our Clients Say</h2>
        <div class="testimonial-grid">
          <blockquote>
            <p>"ToyRank helped us cut our ACOS by 30% in just two months. Their focus on the 'Top of Search' placement was the game-changer for our STEM toy line."</p>
            <cite>— Building Blocks Co.</cite>
          </blockquote>
          <blockquote>
            <p>"Finally, an agency that understands Q4 seasonality. The Launch Rocket package gave our new building blocks set the velocity it needed to hit #1 New Release."</p>
            <cite>— Creative Toys Ltd.</cite>
          </blockquote>
          <blockquote>
            <p>"The Category Audit paid for itself in the first week. They found keywords we'd been spending thousands on for months with zero sales."</p>
            <cite>— Happy Kids Gear</cite>
          </blockquote>
        </div>
      </div>
    </section>

    <section id="cta" class="cta">
      <div class="container text-center">
        <h2>Ready to Scale Your Toy Brand?</h2>
        <p>Don't let another holiday season pass with sub-optimal ad spend. Get a clear look at your growth opportunities with a free mini-audit of one ASIN.</p>
        <a href="#contact" class="btn btn-primary btn-large">Get My Free Mini-Audit</a>
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
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#why-us">Why Us</a></li>
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
