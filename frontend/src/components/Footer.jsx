import { Link } from "react-router-dom";
import logo from "../SMT_logo.svg";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand */}
        <div style={styles.column}>
          <img src={logo} alt="Sri Manjunatha Textiles Logo" style={styles.logo} />
          <h2 style={styles.brandTitle}>Sri Manjunatha Textiles</h2>
          <p style={styles.text}>
            A complete family textile showroom offering the best of fashion
            for Men, Women and Kids.
          </p>
          <div style={styles.socialRow}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pinterest" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
            </svg></a>
          </div>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            <li><Link to="/about" style={styles.link}>About Us</Link></li>
            <li><Link to="/" style={styles.link}>Store Locator</Link></li>
            <li><Link to="/orders" style={styles.link}>Track Order</Link></li>
            <li><Link to="/" style={styles.link}>Return &amp; Exchange</Link></li>
            <li><Link to="/" style={styles.link}>Terms &amp; Conditions</Link></li>
            <li><Link to="/" style={styles.link}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Customer Care</h3>
          <ul style={styles.list}>
            <li><Link to="/contact" style={styles.link}>Help &amp; Support</Link></li>
            <li><Link to="/" style={styles.link}>FAQs</Link></li>
            <li><Link to="/" style={styles.link}>Shipping Policy</Link></li>
            <li><Link to="/" style={styles.link}>Return Policy</Link></li>
            <li><Link to="/" style={styles.link}>Size Guide</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Store Information */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Store Information</h3>
          <a href="https://maps.app.goo.gl/rAsAKsEY4By8zgCg6?g_st=aw" target="_blank" rel="noopener noreferrer" style={styles.infoRow}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={styles.infoIcon}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" fill="#7a1f2b" />
            </svg>
            <span style={{ color: "#7a1f2b", fontWeight: 600 }}>Malur, Karnataka</span>
          </a>

          <div style={styles.infoRow}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={styles.infoIcon}>
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" fill="#666" />
            </svg>
            <span style={styles.text}>+91 8277181949</span>
          </div>

          <div style={styles.infoRow}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={styles.infoIcon}>
              <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13zm2.2.3 7.35 5.51a.7.7 0 0 0 .9 0L19.8 5.8" stroke="#666" strokeWidth="1.3" fill="none" />
            </svg>
            <span style={styles.text}>srimanjunathatextilesofficial@gmail.com</span>
          </div>
        </div>
      </div>

      <hr style={styles.hr} />

      <div style={styles.bottomBar}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} Sri Manjunatha Textiles. All Rights Reserved.
        </p>
        <a href="https://wa.me/918277181949" target="_blank" rel="noopener noreferrer" style={styles.whatsappLink}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.1h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.84-3.04-.2-.31a8.15 8.15 0 0 1-1.26-4.33c0-4.51 3.68-8.19 8.2-8.19 2.19 0 4.25.85 5.8 2.4a8.13 8.13 0 0 1 2.4 5.8c0 4.51-3.68 8.19-8.17 8.19zm4.49-6.14c-.25-.12-1.45-.71-1.67-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z" />
          </svg>
          <span style={{ marginLeft: "6px" }}>Chat on WhatsApp</span>
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#ffffff",
    color: "#333",
    padding: "40px 20px 20px",
    marginTop: "50px",
    borderTop: "1px solid #e0e0e0",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  column: {
    flex: "1 1 180px",
    textAlign: "left",
  },
  logo: {
    height: "50px",
    marginBottom: "8px",
  },
  brandTitle: {
    margin: "0 0 10px 0",
    fontSize: "17px",
    color: "#7a1f2b",
  },
  heading: {
    fontSize: "16px",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    color: "#222",
  },
  text: {
    color: "#666",
    fontSize: "14px",
    margin: 0,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    color: "#666",
    textDecoration: "none",
    fontSize: "14px",
    display: "block",
    margin: "8px 0",
  },
  socialRow: {
    display: "flex",
    gap: "10px",
    marginTop: "12px",
  },
  socialIcon: {
    background: "#f0f0f0",
    color: "#333",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: "bold",
    textDecoration: "none",
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "8px 0",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  infoIcon: {
    flexShrink: 0,
  },
  hr: {
    border: "none",
    borderTop: "1px solid #e0e0e0",
    maxWidth: "100%",
    margin: "30px auto 15px",
  },
  bottomBar: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  copyright: {
    fontSize: "13px",
    color: "#888",
    margin: 0,
  },
  whatsappLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#25D366",
    fontSize: "14px",
    fontWeight: "600",
  },
};

export default Footer;
