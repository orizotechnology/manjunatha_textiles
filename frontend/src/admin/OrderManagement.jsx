import { useEffect, useState } from "react";
import axios from "axios";

function OrderManagement() {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/orders");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const updateOrderStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/orders/${id}`, { status });
      loadOrders();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Customer Orders</h2>
      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.customer_name}</td>
              <td>{order.product_name}</td>
              <td>{order.quantity}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.order_id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </td>
              <td>{order.created_at ? new Date(order.created_at).toLocaleDateString() : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderManagement;