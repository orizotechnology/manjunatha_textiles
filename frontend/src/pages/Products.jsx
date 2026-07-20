import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

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

  // Add To Cart
  const addToCart = async (productId) => {
    try {
      const res = await axios.post("http://localhost:5000/cart", {
        product_id: productId,
        quantity: 1,
      });

      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Failed to add to cart");
    }
  };

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.product_name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category_name === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="products-page">

      {/* Heading */}

      <div className="products-header">
        <h1 className="products-title">Our Collections</h1>
        <p>Discover Premium Fashion Wear</p>
      </div>

      {/* Search + Category */}

      <div className="filter-section">

        <input
          className="search-box"
          type="text"
          placeholder="🔍 Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Men's Wear</option>
          <option>Women's Wear</option>
          <option>Kids Wear</option>
          <option>Traditional Wear</option>
          <option>Casual Wear</option>
          <option>Party Wear</option>
          <option>Seasonal Collections</option>
        </select>

      </div>

      {/* Products */}

      <div className="products-grid">

        {filteredProducts.map((item) => (

          <div className="product-card" key={item.product_id}>

            <img
              src={`/${item.image1}`}
              alt={item.product_name}
              className="product-image"
            />

            <div className="product-info">

              <h3>{item.product_name}</h3>

              <p className="product-desc">
                {item.description}
              </p>

              <p className="product-price">
                ₹ {item.price}
              </p>

              <p className="product-category">
                {item.category_name}
              </p>

              <div className="product-buttons">

                <button
                  className="cart-btn"
                  onClick={() => addToCart(item.product_id)}
                >
                  🛒 Add to Cart
                </button>

                <Link to={`/product/${item.product_id}`}>
                  <button className="details-btn">
                    View Details
                  </button>
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;