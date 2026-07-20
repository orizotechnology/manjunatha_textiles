import { useEffect, useState } from "react";
import axios from "axios";

function GalleryManagement() {
  const [gallery, setGallery] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const loadGallery = async () => {
    try {
      const res = await axios.get("http://localhost:5000/gallery");
      setGallery(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadGallery();
  }, []);

  const addImage = async () => {
    if (!title.trim() || !image.trim()) return;
    try {
      await axios.post("http://localhost:5000/gallery", { title, image });
      setTitle("");
      setImage("");
      loadGallery();
    } catch (err) {
      console.log(err);
      alert("Failed to add gallery image");
    }
  };

  const deleteImage = async (id) => {
    if (!window.confirm("Delete this gallery image?")) return;
    try {
      await axios.delete(`http://localhost:5000/gallery/${id}`);
      loadGallery();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Gallery Management</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Image URL (e.g. images/trend1.jpg)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={addImage}>Add Image</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px" }}>
        {gallery.map((item) => (
          <div key={item.gallery_id} style={{ border: "1px solid #e0e0e0", borderRadius: "10px", padding: "10px" }}>
            <img
              src={`/${item.image}`}
              alt={item.title}
              style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "8px" }}
            />
            <p style={{ margin: "8px 0" }}>{item.title}</p>
            <button onClick={() => deleteImage(item.gallery_id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryManagement;