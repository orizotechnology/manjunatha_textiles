function Contact() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Contact Us</h1>

      <form style={{ maxWidth: "500px" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        ></textarea>

        <button type="button">
          Send Message
        </button>
      </form>

      <hr />

      <h2>Manjunath Textiles</h2>

<p>📍 Madurai, Tamil Nadu</p>
<p>📞 +91 XXXXXXXXXX</p>
<p>✉️ manjunathtextiles@gmail.com</p>
      <h2>Google Map</h2>

      <iframe
        title="map"
        src="https://www.google.com/maps?q=Madurai&output=embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
      ></iframe>

      <h2>Follow Us</h2>

      <p>📘 Facebook</p>
      <p>📷 Instagram</p>
      <p>🐦 Twitter</p>
    </div>
  );
}

export default Contact;