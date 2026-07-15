import { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const loadCart = () => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadCart();
  }, []);

  const removeItem = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/cart/${id}`
      );

      alert(res.data.message);
      loadCart();
    } catch (err) {
      console.log(err);
      alert("Failed to remove item");
    }
  };

  // Total Amount
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 My Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item) => (
              <div className="cart-card" key={item.cart_id}>
                <img
                  className="cart-image"
                  src={`/${item.image1}`}
                  alt={item.product_name}
                />

                <div className="cart-info">
                  <h3>{item.product_name}</h3>

                  <p>{item.description}</p>

                  <p>
                    <b>Color:</b> {item.color}
                  </p>

                  <p className="quantity">
                    Quantity: {item.quantity}
                  </p>

                  <h3 className="price">
  ₹ {item.price || 0}
</h3>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.cart_id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total : ₹ {total.toFixed(2)}</h2>

           <button
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout
</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;