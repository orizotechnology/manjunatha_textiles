import { useEffect, useState } from "react";
import axios from "axios";

function Lookbook() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Fashion Lookbook</h1>

      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        Explore our latest fashion inspirations.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.product_id}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              background: "#fff",
            }}
          >
            <img
              src={`/${item.image1}`}
              alt={item.product_name}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h2>{item.product_name}</h2>
              <p>{item.category_name}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lookbook;