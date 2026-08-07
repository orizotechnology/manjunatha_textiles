import { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredOrders = orders.filter((order) => {
    return (
      order.product_name.toLowerCase().includes(search.toLowerCase()) ||
      order.customer_name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="orders-page">

      <div className="orders-banner">
        <h1>My Orders</h1>
        <p>Track and manage your recent purchases</p>
      </div>

      <div className="orders-search">
        <input
          type="text"
          placeholder="Search by product or customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredOrders.length === 0 ? (
        <div className="empty-orders">
          <h2>No Orders Found</h2>
          <p>Your orders will appear here.</p>
        </div>
      ) : (
        <div className="orders-grid">

          {filteredOrders.map((order) => (
            <div className="order-card" key={order.order_id}>

              <div className="order-top">
                <div>
                  <h2>{order.product_name}</h2>
                  <span className="order-id">
                    Order #{order.order_id}
                  </span>
                </div>

                <span className="status delivered">
                  Delivered
                </span>
              </div>

              <div className="order-details">

                <p>
                  <strong>Customer :</strong>{" "}
                  {order.customer_name}
                </p>

                <p>
                  <strong>Quantity :</strong>{" "}
                  {order.quantity}
                </p>

                <p>
                  <strong>Phone :</strong>{" "}
                  {order.phone}
                </p>

                <p>
                  <strong>Address :</strong>{" "}
                  {order.address}
                </p>

              </div>

              <div className="order-buttons">

                <button className="track-btn">
                  Track Order
                </button>

                <button className="support-btn">
                  Contact Support
                </button>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
  
}

export default Orders;
