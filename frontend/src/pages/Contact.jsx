import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero */}

      <section className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Visit our store or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Section */}

      <section className="contact-container">

        <div className="contact-form">

          <h2>Send Us a Message</h2>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Phone Number"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button>
              Send Message
            </button>

          </form>

        </div>

        <div className="contact-info">

          <h2>Store Information</h2>

          <div className="info-card">
            <h3>📍 Address</h3>
            <p>
              Sri Manjunatha Textiles<br />
              Malur, Karnataka
            </p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 8277181949</p>
          </div>

          <div className="info-card">
            <h3>✉ Email</h3>
            <p>srimanjunathatextilesofficial@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>🕒 Business Hours</h3>
            <p>
              Monday - Saturday<br />
              9:30 AM - 8:30 PM
            </p>
          </div>

        </div>

      </section>

      {/* Map */}

      <section className="map-section">

        <h2>Visit Our Store</h2>

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Malur,Karnataka&output=embed"
          loading="lazy"
        ></iframe>

      </section>

      {/* FAQ */}

      <section className="faq-section">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-grid">

          <div className="faq-card">
            <h3>Do you offer home delivery?</h3>
            <p>
              Yes. We deliver products safely across multiple locations.
            </p>
          </div>

          <div className="faq-card">
            <h3>Can I exchange products?</h3>
            <p>
              Yes, exchanges are available according to our store policy.
            </p>
          </div>

          <div className="faq-card">
            <h3>What payment methods are accepted?</h3>
            <p>
              UPI, Credit Cards, Debit Cards, Net Banking and Cash.
            </p>
          </div>

        </div>

      </section>

      {/* Social */}

      {/* Social Section */}

<section className="social-section">

  <h2>Stay Connected</h2>

  <p>
    Follow Sri Manjunatha Textiles for our latest collections,
    offers and fashion updates.
  </p>

  <div className="social-icons">

    <a href="#" className="social-card facebook">
      <div className="icon">📘</div>
      <h4>Facebook</h4>
      <span>@SriManjunathaTextiles</span>
    </a>

    <a href="#" className="social-card instagram">
      <div className="icon">📸</div>
      <h4>Instagram</h4>
      <span>@manjunatha_textiles</span>
    </a>

    <a href="#" className="social-card youtube">
      <div className="icon">▶️</div>
      <h4>YouTube</h4>
      <span>Fashion Videos</span>
    </a>

    <a href="#" className="social-card whatsapp">
      <div className="icon">💬</div>
      <h4>WhatsApp</h4>
      <span>Chat with Us</span>
    </a>

  </div>

</section>

    </div>
  );
}

export default Contact;
