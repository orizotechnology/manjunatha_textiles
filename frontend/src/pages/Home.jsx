import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Manjunath Textiles</h1>

        <p>
          <p>
  Discover premium fashion collections for men, women and kids.
</p>
        </p>

        <button
          className="hero-btn"
          onClick={() => {
            window.location.href = "/products";
          }}
        >
          Shop Collection
        </button>
      </section>

      {/* Featured Collections */}
      <section>
        <h2 className="section-title">Featured Collections</h2>

        <div className="collection-grid">
          <div className="collection-card">
            <h3>👔 Men's Wear</h3>
          </div>

          <div className="collection-card">
            <h3>👗 Women's Wear</h3>
          </div>

          <div className="collection-card">
            <h3>🧒 Kids Wear</h3>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section>
        <h2 className="section-title">New Arrivals</h2>

        <div className="product-grid">
          {products
            .filter((item) => item.new_arrival === 1)
            .map((item) => (
              <div className="product-card" key={item.product_id}>
                <img
                  src={`/${item.image1}`}
                  alt={item.product_name}
                />

                <div className="product-info">
                  <h3>{item.product_name}</h3>

                  <p>{item.description}</p>

                  <p className="category">
                    {item.category_name}
                  </p>

                  <Link to={`/product/${item.product_id}`}>
                    <button className="hero-btn">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Trending Products */}
      <section>
        <h2 className="section-title">Trending Products</h2>

        <div className="product-grid">
          {products
            .filter((item) => item.trending === 1)
            .map((item) => (
              <div className="product-card" key={item.product_id}>
                <img
                  src={`/${item.image1}`}
                  alt={item.product_name}
                />

                <div className="product-info">
                  <h3>{item.product_name}</h3>

                  <p>{item.description}</p>

                  <p className="category">
                    {item.category_name}
                  </p>

                  <Link to={`/product/${item.product_id}`}>
                    <button className="hero-btn">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="section-title">Why Choose Us</h2>

        <p style={{ textAlign: "center" }}>
          Quality products, premium designs and trusted service.
        </p>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="section-title">Customer Reviews</h2>

        <p style={{ textAlign: "center" }}>
          "Amazing quality and beautiful designs"
        </p>
      </section>

      {/* Instagram Gallery */}
      <section>
        <h2 className="section-title">Instagram Gallery</h2>
      </section>

    </div>
  );
}

export default Home;