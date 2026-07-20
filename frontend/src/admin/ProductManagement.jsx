// src/admin/ProductManagement.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductManagement.css";

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

function ProductManagement() {
  const [product, setProduct] = useState(initialProduct);
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [search, setSearch] = useState("");

  const loadProducts = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    try {
      const res = await axios.post("http://localhost:5000/products", product);
      alert(res.data.message);
      await loadProducts();
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
      await loadProducts();
      setProduct(initialProduct);
      setEditMode(false);
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      const res = await axios.delete(`http://localhost:5000/products/${id}`);
      alert(res.data.message);
      setProducts(products.filter((item) => item.product_id !== id));
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  const cancelEdit = () => {
    setProduct(initialProduct);
    setEditMode(false);
  };

  return (
    <div>
      <h2>Product Management</h2>

      <div className="product-form">
        <input name="product_name" placeholder="Product Name" value={product.product_name} onChange={handleChange} />
        <input name="description" placeholder="Description" value={product.description} onChange={handleChange} />
        <input name="color" placeholder="Color" value={product.color} onChange={handleChange} />

        <select name="category_id" value={product.category_id} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="1">Men's Wear</option>
          <option value="2">Women's Wear</option>
          <option value="3">Kids Wear</option>
          <option value="4">Traditional Wear</option>
          <option value="5">Casual Wear</option>
          <option value="6">Party Wear</option>
          <option value="7">Seasonal Collections</option>
        </select>

        <input name="size" placeholder="Size" value={product.size} onChange={handleChange} />
        <input name="material" placeholder="Material" value={product.material} onChange={handleChange} />
        <input name="care_instruction" placeholder="Care Instruction" value={product.care_instruction} onChange={handleChange} />
        <input name="image1" placeholder="Image URL" value={product.image1} onChange={handleChange} />

        <label>
          <input
            type="checkbox"
            checked={product.featured === 1}
            onChange={(e) => setProduct({ ...product, featured: e.target.checked ? 1 : 0 })}
          /> Featured
        </label>
        <label>
          <input
            type="checkbox"
            checked={product.trending === 1}
            onChange={(e) => setProduct({ ...product, trending: e.target.checked ? 1 : 0 })}
          /> Trending
        </label>
        <label>
          <input
            type="checkbox"
            checked={product.new_arrival === 1}
            onChange={(e) => setProduct({ ...product, new_arrival: e.target.checked ? 1 : 0 })}
          /> New Arrival
        </label>

        <div>
          <button onClick={editMode ? updateProduct : addProduct}>
            {editMode ? "Update Product" : "Add Product"}
          </button>
          {editMode && <button onClick={cancelEdit}>Cancel</button>}
        </div>
      </div>

      <hr />

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="product-search"
      />

      <div className="product-grid">
        {products
          .filter((item) => item.product_name.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <div key={item.product_id} className="product-card">
              <img src={`/${item.image1}`} alt={item.product_name} />
              <h4>{item.product_name}</h4>
              <p>{item.description}</p>
              <p>Category: {item.category_name}</p>
              <p><strong>Size:</strong> {item.size}</p>
              <p><strong>Color:</strong> {item.color}</p>
              <p><strong>Material:</strong> {item.material}</p>
              <div>
                <button
                  onClick={() => {
                    setProduct({ ...item });
                    setEditMode(true);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteProduct(item.product_id)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductManagement;