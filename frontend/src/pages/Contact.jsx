import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Get in touch with us today.</p>
      </div>

      <div className="contact-container">

        {/* Contact Form */}
        <div className="contact-form">

          <h2>Send Message</h2>

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
              placeholder="Mobile Number"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="button">
              Send Message
            </button>

          </form>

        </div>

        {/* Contact Details */}
        <div className="contact-info">

          <h2>Store Information</h2>

          <p>
            📍 <strong>Address:</strong><br />
            Sri Manjunatha Textiles,<br />
            Malur, Karnataka
          </p>

          <p>
            📞 <strong>Phone:</strong><br />
            +91 8277181949
          </p>

          <p>
            ✉️ <strong>Email:</strong><br />
            srimanjunathatextilesofficial@gmail.com
          </p>

          <p>
            🕒 <strong>Business Hours:</strong><br />
            Monday - Saturday<br />
            9:30 AM - 8:30 PM
          </p>

        </div>

      </div>

      {/* Google Map */}
      <div className="map-section">

        <h2>Find Our Store</h2>

        <iframe
          title="Sri Manjunatha Textiles"
          src="https://www.google.com/maps?q=Malur,Karnataka&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

      </div>

      {/* Social Media */}
      <div className="social-section">

        <h2>Follow Us</h2>

        <div className="social-icons">
          <span>📘 Facebook</span>
          <span>📷 Instagram</span>
          <span>▶️ YouTube</span>
          <span>📌 Pinterest</span>
        </div>

      </div>

    </div>
  );
}

export default Contact;