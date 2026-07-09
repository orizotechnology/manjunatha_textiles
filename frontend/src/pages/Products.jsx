import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

  // ADD TO CART
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
    <div className="container">

      <h1 style={{ textAlign: "center" }}>👕 Products</h1>

      {/* Search + Category */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          margin: "20px 0",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "260px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "6px",
          }}
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {filteredProducts.map((item) => (
          <div
            key={item.product_id}
            style={{
              width: "260px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
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

            <div style={{ padding: "15px" }}>
              <h3>{item.product_name}</h3>

              <p>{item.description}</p>

              <p>
                <strong>Category:</strong> {item.category_name}
              </p>

              <p>
                <strong>Color:</strong> {item.color}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <button onClick={() => addToCart(item.product_id)}>
                  🛒 Add to Cart
                </button>

                <Link to={`/product/${item.product_id}`}>
                  <button>View Details</button>
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