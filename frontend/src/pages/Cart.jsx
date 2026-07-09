import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);

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
      const res = await axios.delete(`http://localhost:5000/cart/${id}`);

      alert(res.data.message);

      loadCart();
    } catch (err) {
      console.log(err);
      alert("Failed to remove item");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>🛒 My Cart</h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          {cart.map((item) => (
            <div
              key={item.cart_id}
              style={{
                width: "250px",
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
                  <strong>Color:</strong> {item.color}
                </p>

                <p>
                  <strong>Quantity:</strong> {item.quantity}
                </p>

                <button
                  onClick={() => removeItem(item.cart_id)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "#dc3545",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;