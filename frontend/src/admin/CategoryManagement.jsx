import { useEffect, useState } from "react";
import axios from "axios";

function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  const loadCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/categories");
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const addCategory = async () => {
    if (!name.trim()) return;
    try {
      await axios.post("http://localhost:5000/categories", { category_name: name });
      setName("");
      loadCategories();
    } catch (err) {
      console.log(err);
      alert("Failed to add category");
    }
  };

  const deleteCategory = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await axios.delete(`http://localhost:5000/categories/${id}`);
      loadCategories();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Category Management</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          placeholder="Category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addCategory}>Add Category</button>
      </div>
      <ul>
        {categories.map((cat) => (
          <li key={cat.category_id} style={{ marginBottom: "8px" }}>
            {cat.category_name}
            <button style={{ marginLeft: "12px" }} onClick={() => deleteCategory(cat.category_id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryManagement;