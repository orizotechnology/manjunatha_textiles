import { useEffect, useState } from "react";
import axios from "axios";

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


  const totalProducts = products.length;
const featuredProducts = products.filter(
  (item) => item.featured === 1
).length;
const trendingProducts = products.filter(
  (item) => item.trending === 1
).length;
const newArrivals = products.filter(
  (item) => item.new_arrival === 1
).length;



  return (
    <div style={{ padding: "20px" }}>

      <h2>Admin Panel</h2>
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


      <input
        type="number"
        name="category_id"
        placeholder="Category ID"
        value={product.category_id}
        onChange={handleChange}
      />

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


      <hr />


      <h3>All Products</h3>


      {products.map((item) => (

        <div
          key={item.product_id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0",
          }}
        >

          <h4>{item.product_name}</h4>

          <p>{item.description}</p>
          <p>Category: {item.category_name}</p>


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