import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Gallery</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.product_id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src={`/${item.image1}`}
              alt={item.product_name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "10px" }}>
              <h3>{item.product_name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;