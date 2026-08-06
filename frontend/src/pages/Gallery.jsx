import { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";

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
    <div className="gallery-page">

      <div className="gallery-header">
        <h1>Fashion Gallery</h1>
        <p>
          Explore our premium collection crafted with elegance, comfort, and
          timeless style.
        </p>
      </div>

      <div className="gallery-grid">
        {products.map((item) => (
          <div className="gallery-card" key={item.product_id}>

            <div className="gallery-image-box">
              <img
                src={`/images/${item.image1}`}
                alt={item.product_name}
                className="gallery-image"
              />

              <div className="gallery-overlay">
                <h3>{item.product_name}</h3>
                <p>₹ {item.price}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Gallery;
