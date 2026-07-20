import { useNavigate } from "react-router-dom";
import "./Collections.css";

function Collections() {

  const navigate = useNavigate();

  const collections = [
    {
      name: "Men's Wear",
      image: "/images/mens.jpg",
      description: "Premium Shirts, T-Shirts & Jeans",
    },
    {
      name: "Women's Wear",
      image: "/images/womens.jpg",
      description: "Sarees, Kurtis & Western Wear",
    },
    {
      name: "Kids Wear",
      image: "/images/kids.jpg",
      description: "Comfortable & Trendy Kids Fashion",
    },
    {
      name: "Traditional Wear",
      image: "/images/traditional.jpg",
      description: "Ethnic Collection for Every Occasion",
    },
    {
      name: "Casual Wear",
      image: "/images/casual.jpg",
      description: "Stylish Everyday Wear",
    },
    {
      name: "Party Wear",
      image: "/images/party.jpg",
      description: "Premium Party & Designer Collection",
    },
    {
      name: "Seasonal Collections",
      image: "/images/seasonal.jpg",
      description: "Comfort Wear & Seasonal Fashion",
    },
    {
      name: "Jean Collections",
      image: "/images/jean.jpg",
      description: "Stylish Outfit",
    },
  ];

  return (
    <div className="collections-page">

      <h1>Our Collections</h1>

      <div className="collections-grid">

        {collections.map((item, index) => (

          <div className="collection-card" key={index}>

            <img
              src={item.image}
              alt={item.name}
            />

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <button
              onClick={() => navigate("/products")}
            >
              Explore Collection
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Collections;