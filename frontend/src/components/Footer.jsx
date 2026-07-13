import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/categories");
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories for footer:", err);
        setError("Could not load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const PaymentIcon = ({ label, color }) => (
    <div style={{ ...styles.paymentBadge, borderColor: color }}>
      <svg width="20" height="14" viewBox="0 0 20 14" style={{ marginRight: "6px" }}>
        <rect x="0" y="0" width="20" height="14" rx="2" fill={color} opacity="0.15" />
        <rect x="0" y="3" width="20" height="2.5" fill={color} opacity="0.5" />
      </svg>
      <span style={{ color }}>{label}</span>
    </div>
  );

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand */}
        <div style={styles.column}>
          <h2 style={styles.brandTitle}>🛍 Manjunath Textiles</h2>
          <p style={styles.text}>
            A complete family textile showroom offering the best of fashion
            for Men, Women, Kids and Home.
          </p>
          <div style={styles.socialRow}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
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

        {/* Categories - dynamic from API */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Categories</h3>
          {loading ? (
            <p style={styles.text}>Loading...</p>
          ) : error ? (
            <p style={styles.text}>{error}</p>
          ) : categories.length === 0 ? (
            <p style={styles.text}>No categories available</p>
          ) : (
            <ul style={styles.list}>
              {categories.map((cat) => (
                <li key={cat.category_id}>
                  <Link to="/collections" style={styles.link}>
                    {cat.category_name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
          <p style={styles.text}>📍 Madurai, Tamil Nadu</p>
          <p style={styles.text}>📞 +91 9876543210</p>
          <p style={styles.text}>✉️ manjunathtextiles@gmail.com</p>
        </div>
      </div>

      <hr style={styles.hr} />

      <div style={styles.bottomBar}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} Manjunath Textiles. All Rights Reserved.
        </p>
        <div style={styles.paymentRow}>

          <PaymentIcon label="VISA" color="#1a1f71" />
          <PaymentIcon label="Mastercard" color="#eb001b" />
          <PaymentIcon label="RuPay" color="#0f4c81" />
          <PaymentIcon label="UPI" color="#097939" />
        </div>
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
    gap: "40px",
    // maxWidth: "1200px",
    width:"1250px",
    // margin: "0px 200px",
    margin:"0px 120px",
  },
  column: {
    flex: "1 1 180px",
    textAlign: "left",
  },
  brandTitle: {
    marginTop: 0,
    marginBottom: "10px",
    color: "#e11530ff",
  },
  heading: {
    fontSize: "16px",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    color: "#222",
  },
  brand: {
    
  },
  text: {
    color: "#666",
    fontSize: "14px",
    margin: "6px 0",
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
  hr: {
    border: "none",
    borderTop: "1px solid #e0e0e0",
    maxWidth: "1100px",
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
  paymentRow: {
    display: "flex",
    // gap: "10px",

  },
  svg:{
    fontSize:"10px",
  },
  paymentBadge: {
    display: "flex",
    alignItems: "center",
    border: "1px solid",
    borderRadius: "4px",
    padding: "4px 10px",
    fontSize: "11px",
    fontWeight: "600",
    background: "#fff",
  },
};

export default Footer;
