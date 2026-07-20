import { useEffect, useState } from "react";
import axios from "axios";

function BannerManagement() {
  const [banners, setBanners] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");

  const loadBanners = async () => {
    try {
      const res = await axios.get("http://localhost:5000/banners");
      setBanners(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadBanners();
  }, []);

  const addBanner = async () => {
    if (!title.trim() || !image.trim()) return;
    try {
      await axios.post("http://localhost:5000/banners", { title, subtitle, image });
      setTitle("");
      setSubtitle("");
      setImage("");
      loadBanners();
    } catch (err) {
      console.log(err);
      alert("Failed to add banner");
    }
  };

  const deleteBanner = async (id) => {
    if (!window.confirm("Delete this banner?")) return;
    try {
      await axios.delete(`http://localhost:5000/banners/${id}`);
      loadBanners();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Banner Management</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <input
          placeholder="Image URL (e.g. images/promo1.jpg)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button onClick={addBanner}>Add Banner</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
        {banners.map((item) => (
          <div key={item.banner_id} style={{ border: "1px solid #e0e0e0", borderRadius: "10px", padding: "10px" }}>
            <img
              src={`/${item.image}`}
              alt={item.title}
              style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h4 style={{ margin: "8px 0 4px" }}>{item.title}</h4>
            <p style={{ margin: 0, color: "#666" }}>{item.subtitle}</p>
            <button style={{ marginTop: "8px" }} onClick={() => deleteBanner(item.banner_id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerManagement;