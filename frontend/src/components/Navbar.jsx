import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#111",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        flexWrap: "wrap",
      }}
    >
      <h2 style={{ margin: 0 }}>
        🛍 Manjunath Textiles
      </h2>

      <div
        style={{
          display: "flex",
          gap: "18px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Link to="/" style={link}>Home</Link>

        <Link to="/products" style={link}>Products</Link>

        <Link to="/collections" style={link}>Collections</Link>

        <Link to="/gallery" style={link}>Gallery</Link>

        <Link to="/lookbook" style={link}>Lookbook</Link>

        <Link to="/about" style={link}>About</Link>

        <Link to="/contact" style={link}>Contact</Link>

        <Link to="/orders" style={link}>Orders</Link>

        <Link to="/admin" style={link}>Admin</Link>

        <Link to="/cart" style={link}>🛒 Cart</Link>
      </div>
    </nav>
  );
}

const link = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "16px",
};

export default Navbar;