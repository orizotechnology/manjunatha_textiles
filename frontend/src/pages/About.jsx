import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About Manjunatha Textiles</h1>
          <p>
            Bringing Tradition, Fashion and Quality together for every
            generation.
          </p>
        </div>
      </section>
      {/* Story */}
      <section className="about-section">
        <div className="about-text">
          <h2>Our Story</h2>

          <p>
            Manjunatha Textiles is one of the trusted destinations for premium
            clothing collections. From elegant traditional wear to modern
            fashion, we provide high-quality garments designed with comfort,
            durability and style.
          </p>

          <p>
            Our mission is simple—deliver premium fashion at affordable prices
            while maintaining excellent customer service and long-lasting
            quality.
          </p>
        </div>
      </section>

      {/* Statistics */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Premium Collections</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Trusted Brands</p>
        </div>

        <div className="stat-card">
          <h2>15+</h2>
          <p>Years Experience</p>
        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-section">

        <h2>Why Choose Us?</h2>

        <div className="why-grid">

          <div className="why-card">
            <span>👗</span>
            <h3>Premium Quality</h3>
            <p>
              Carefully selected fabrics with superior stitching and finishing.
            </p>
          </div>

          <div className="why-card">
            <span>🚚</span>
            <h3>Fast Delivery</h3>
            <p>
              Safe and quick delivery across the country.
            </p>
          </div>

          <div className="why-card">
            <span>💳</span>
            <h3>Secure Payments</h3>
            <p>
              Multiple secure payment methods with complete safety.
            </p>
          </div>

          <div className="why-card">
            <span>⭐</span>
            <h3>Customer Satisfaction</h3>
            <p>
              Thousands of happy customers trust our products every year.
            </p>
          </div>

        </div>

      </section>

      {/* Mission Vision */}

      <section className="mission-section">

        <div className="mission-card">
          <h2>🎯 Our Mission</h2>

          <p>
            To provide fashionable clothing with exceptional quality,
            affordability and customer satisfaction.
          </p>
        </div>

        <div className="mission-card">
          <h2>🌍 Our Vision</h2>

          <p>
            To become one of India's most trusted textile and fashion retail
            brands.
          </p>
        </div>

      </section>

      {/* Values */}

      <section className="values-section">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div className="value-card">
            ❤️
            <h3>Integrity</h3>
            <p>Honest pricing and transparent service.</p>
          </div>

          <div className="value-card">
            🌱
            <h3>Quality</h3>
            <p>Every product goes through quality inspection.</p>
          </div>

          <div className="value-card">
            🤝
            <h3>Trust</h3>
            <p>Building long-term relationships with customers.</p>
          </div>

          <div className="value-card">
            💡
            <h3>Innovation</h3>
            <p>Keeping fashion updated with modern trends.</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta-section">

        <h2>Discover Your Perfect Style</h2>

        <p>
          Explore our latest collections designed for every occasion.
        </p>

        <button>Shop Now</button>

      </section>

    </div>
  );
}

export default About;
