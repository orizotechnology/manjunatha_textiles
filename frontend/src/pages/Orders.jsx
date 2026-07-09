import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>📦 Orders</h1>

      {orders.map((order) => (
        <div className="card" key={order.order_id}>
          <h3>{order.product_name}</h3>
          <p><strong>Customer:</strong> {order.customer_name}</p>
          <p><strong>Quantity:</strong> {order.quantity}</p>
          <p><strong>Phone:</strong> {order.phone}</p>
          <p><strong>Address:</strong> {order.address}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;