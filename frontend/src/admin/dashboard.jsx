import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const productRes = await axios.get("http://localhost:5000/products");
        const orderRes = await axios.get("http://localhost:5000/orders");
        setProducts(productRes.data);
        setOrders(orderRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  const stats = [
    { label: "Total Products", value: products.length, color: "#4CAF50" },
    { label: "Featured", value: products.filter((p) => p.featured === 1).length, color: "#2196F3" },
    { label: "Trending", value: products.filter((p) => p.trending === 1).length, color: "#FF9800" },
    { label: "New Arrivals", value: products.filter((p) => p.new_arrival === 1).length, color: "#9C27B0" },
    { label: "Total Orders", value: orders.length, color: "#E91E63" },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: s.color,
              color: "#fff",
              padding: "20px",
              borderRadius: "12px",
              width: "180px",
            }}
          >
            <h4 style={{ margin: 0, fontWeight: 400 }}>{s.label}</h4>
            <h2 style={{ margin: "8px 0 0" }}>{s.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;