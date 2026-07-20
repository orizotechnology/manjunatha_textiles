import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        const selected = res.data.find(
          (item) => item.product_id === Number(id)
        );

        setProduct(selected);

        if (selected) {
          setMainImage(selected.image1);

          const related = res.data.filter(
            (item) =>
              item.category_name === selected.category_name &&
              item.product_id !== selected.product_id
          );

          setRelatedProducts(related.slice(0, 4));
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const addToCart = async () => {
    try {
      const res = await axios.post("http://localhost:5000/cart", {
        product_id: product.product_id,
        quantity,
      });

      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert("Failed to add to cart");
    }
  };

  const buyNow = async () => {
    try {
      await axios.post("http://localhost:5000/cart", {
        product_id: product.product_id,
        quantity,
      });

      navigate("/checkout");
    } catch (err) {
      console.log(err);
      alert("Failed to proceed");
    }
  };

  if (!product)
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="product-details-page">

      <div className="product-details-container">

        <div className="product-image-section">
          <img
            src={`/${mainImage}`}
            alt={product.product_name}
            className="main-image"
          />
        </div>

        <div className="product-info-section">

          <h1>{product.product_name}</h1>

          <h2 className="price">₹{product.price}</h2>

          <p className="description">{product.description}</p>

          <div className="details-list">
            <p><strong>Category :</strong> {product.category_name}</p>
            <p><strong>Color :</strong> {product.color}</p>
            <p><strong>Material :</strong> {product.material}</p>
            <p><strong>Size :</strong> {product.size}</p>
            <p><strong>Care :</strong> {product.care_instruction}</p>
          </div>

          <div className="quantity-box">
            <button
              onClick={() =>
                quantity > 1 && setQuantity(quantity - 1)
              }
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <div className="product-actions">

            <button
              className="cart-btn"
              onClick={addToCart}
            >
              🛒 Add to Cart
            </button>

            <button
              className="buy-btn"
              onClick={buyNow}
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>

      <div className="related-section">

        <h2>Related Products</h2>

        <div className="related-grid">

          {relatedProducts.map((item) => (
            <div
              key={item.product_id}
              className="related-card"
            >

              <img
                src={`/${item.image1}`}
                alt={item.product_name}
              />

              <h4>{item.product_name}</h4>

              <p>₹{item.price}</p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;