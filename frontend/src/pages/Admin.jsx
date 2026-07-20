import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);
function Admin() {
  const initialProduct = {
    product_id: "",
    product_name: "",
    description: "",
    category_id: "",
    size: "",
    color: "",
    material: "",
    care_instruction: "",
    image1: "",
    featured: 0,
    trending: 0,
    new_arrival: 0,
  };

  const [product, setProduct] = useState(initialProduct);
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };


  const addProduct = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/products",
        product
      );

      alert(res.data.message);

      const response = await axios.get(
        "http://localhost:5000/products"
      );

      setProducts(response.data);

      setProduct(initialProduct);
      setEditMode(false);

    } catch (err) {
      console.log(err);
      alert("Failed to add product");
    }
  };


  const updateProduct = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/products/${product.product_id}`,
        product
      );

      alert(res.data.message);

      const response = await axios.get(
        "http://localhost:5000/products"
      );

      setProducts(response.data);

      setProduct(initialProduct);
      setEditMode(false);

    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };


  const cancelEdit = () => {
    setProduct(initialProduct);
    setEditMode(false);
  };


  const deleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/products/${id}`
      );

      alert(res.data.message);

      setProducts(
        products.filter((item) => item.product_id !== id)
      );

    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  const updateOrderStatus = async (id, status) => {
  try {
    await axios.put(`http://localhost:5000/orders/${id}`, {
      status,
    });

    const orderRes = await axios.get(
      "http://localhost:5000/orders"
    );

    setOrders(orderRes.data);

  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  const loadData = async () => {
    try {
      const productRes = await axios.get("http://localhost:5000/products");
      const orderRes = await axios.get("http://localhost:5000/orders");

      setProducts(productRes.data);
      setOrders(orderRes.data);

    } catch (err) {
      console.log(err);
    }
  };

  loadData();
}, []);
  


  const totalProducts = products.length;
  const totalOrders = orders.length;
const featuredProducts = products.filter(
  (item) => item.featured === 1
).length;
const trendingProducts = products.filter(
  (item) => item.trending === 1
).length;
const newArrivals = products.filter(
  (item) => item.new_arrival === 1
).length;

const barData = {
  labels: [
    "Products",
    "Featured",
    "Trending",
    "New Arrivals",
    "Orders",
  ],
  datasets: [
    {
      label: "Dashboard",
      data: [
        totalProducts,
        featuredProducts,
        trendingProducts,
        newArrivals,
        totalOrders,
      ],
      backgroundColor: [
        "#4CAF50",
        "#2196F3",
        "#FF9800",
        "#9C27B0",
        "#E91E63",
      ],
    },
  ],
};

const pieData = {
  labels: [
    "Featured",
    "Trending",
    "New Arrivals",
  ],
  datasets: [
    {
      data: [
        featuredProducts,
        trendingProducts,
        newArrivals,
      ],
      backgroundColor: [
        "#2196F3",
        "#FF9800",
        "#9C27B0",
      ],
    },
  ],
};



 return (
  <div style={{ padding: "20px" }}>

    <h2>Admin Panel</h2>

    <div
  style={{
    display: "flex",
    gap: "40px",
    marginBottom: "40px",
    flexWrap: "wrap",
  }}
>
  <div style={{ width: "500px" }}>
    <Bar data={barData} />
  </div>

  <div style={{ width: "350px" }}>
    <Pie data={pieData} />
  </div>
</div>

    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          background: "#4CAF50",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "180px",
        }}
      >
        <h3>Total Products</h3>
        <h2>{totalProducts}</h2>
      </div>

      <div
        style={{
          background: "#2196F3",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "180px",
        }}
      >
        <h3>Featured</h3>
        <h2>{featuredProducts}</h2>
      </div>

      <div
        style={{
          background: "#FF9800",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "180px",
        }}
      >
        <h3>Trending</h3>
        <h2>{trendingProducts}</h2>
      </div>

      <div
        style={{
          background: "#9C27B0",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "180px",
        }}
      >
        <h3>New Arrivals</h3>
        <h2>{newArrivals}</h2>
      </div>

      <div
        style={{
          background: "#E91E63",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "180px",
        }}
      >
        <h3>Total Orders</h3>
        <h2>{totalOrders}</h2>
      </div>

    </div>



      <input
        type="text"
        name="product_name"
        placeholder="Product Name"
        value={product.product_name}
        onChange={handleChange}
      />

      <br /><br />


      <input
        type="text"
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
      />

      <br /><br />


      <input
        type="text"
        name="color"
        placeholder="Color"
        value={product.color}
        onChange={handleChange}
      />

      <br /><br />


     <select
  name="category_id"
  value={product.category_id}
  onChange={handleChange}
>
  <option value="">Select Category</option>
  <option value="1">Men's Wear</option>
  <option value="2">Women's Wear</option>
  <option value="3">Kids Wear</option>
  <option value="4">Traditional Wear</option>
  <option value="5">Casual Wear</option>
  <option value="6">Party Wear</option>
  <option value="7">Seasonal Collections</option>
</select>
      <br /><br />


      <input
        type="text"
        name="size"
        placeholder="Size"
        value={product.size}
        onChange={handleChange}
      />

      <br /><br />


      <input
        type="text"
        name="material"
        placeholder="Material"
        value={product.material}
        onChange={handleChange}
      />

      <br /><br />


      <input
        type="text"
        name="care_instruction"
        placeholder="Care Instruction"
        value={product.care_instruction}
        onChange={handleChange}
      />

      <br /><br />


      <input
        type="text"
        name="image1"
        placeholder="Image URL"
        value={product.image1}
        onChange={handleChange}
      />

      <br /><br />
    {/* Featured */}
<div style={{ marginBottom: "10px" }}>
  <label>
    <input
      type="checkbox"
      checked={product.featured === 1}
      onChange={(e) =>
        setProduct({
          ...product,
          featured: e.target.checked ? 1 : 0,
        })
      }
    />
    Featured Product
  </label>
</div>

{/* Trending */}
<div style={{ marginBottom: "10px" }}>
  <label>
    <input
      type="checkbox"
      checked={product.trending === 1}
      onChange={(e) =>
        setProduct({
          ...product,
          trending: e.target.checked ? 1 : 0,
        })
      }
    />
    Trending Product
  </label>
</div>

{/* New Arrival */}
<div style={{ marginBottom: "15px" }}>
  <label>
    <input
      type="checkbox"
      checked={product.new_arrival === 1}
      onChange={(e) =>
        setProduct({
          ...product,
          new_arrival: e.target.checked ? 1 : 0,
        })
      }
    />
    New Arrival
  </label>
</div>

      <button
        onClick={() => {
          editMode ? updateProduct() : addProduct();
        }}
      >
        {editMode ? "Update Product" : "Add Product"}
      </button>


      {editMode && (
        <button onClick={cancelEdit}>
          Cancel
        </button>
      )}


<h2>Customer Orders</h2>

<table
  border="1"
  cellPadding="10"
  style={{
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  }}
>
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
    onChange={(e) =>
      updateOrderStatus(order.order_id, e.target.value)
    }
  >
    <option>Pending</option>
    <option>Shipped</option>
    <option>Delivered</option>
  </select>
</td>
        <td>
          {new Date(order.created_at).toLocaleDateString()}
        </td>
      </tr>
    ))}
  </tbody>
</table>

<hr />

<h3>All Products</h3>

<input
  type="text"
  placeholder="Search Product..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "300px",
    padding: "10px",
    margin: "15px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  }}
/>

    {products
  .filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase())
  )
  .map((item) => (

        <div
          key={item.product_id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0",
          }}
        >
        <img
  src={`/${item.image1}`}
  alt={item.product_name}
  style={{
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
  }}
/>

          <h4>{item.product_name}</h4>

          <p>{item.description}</p>
          <p>Category: {item.category_name}</p>
           <p><strong>Price:</strong> ₹{item.price}</p>
<p><strong>Size:</strong> {item.size}</p>
<p><strong>Color:</strong> {item.color}</p>
<p><strong>Material:</strong> {item.material}</p>

          <button
            onClick={() => {

              setProduct({
                product_id: item.product_id,
                product_name: item.product_name,
                description: item.description,
                category_id: item.category_id,
                size: item.size,
                color: item.color,
                material: item.material,
                care_instruction: item.care_instruction,
                image1: item.image1,
                featured: item.featured,
                trending: item.trending,
                new_arrival: item.new_arrival,
              });

              setEditMode(true);

            }}
          >
            Edit
          </button>


          <button
            onClick={() => deleteProduct(item.product_id)}
          >
            Delete
          </button>


        </div>

      ))}

    </div>
  );
}

export default Admin;