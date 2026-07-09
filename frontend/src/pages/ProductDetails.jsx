import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        const item = res.data.find(
          (p) => p.product_id === Number(id)
        );

        setProduct(item);

        if (item?.image1) {
          setMainImage(item.image1);
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  const images = [
    product.image1,
    product.image2,
    product.image3,
  ].filter(Boolean);

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        {product.product_name}
      </h1>

      {/* Image Gallery */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Main Image */}
        <div>
          <img
            src={`/${mainImage}`}
            alt={product.product_name}
            width="400"
            style={{
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Thumbnails */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={`/${img}`}
              alt="thumbnail"
              width="80"
              height="80"
              onClick={() => setMainImage(img)}
              style={{
                borderRadius: "8px",
                cursor: "pointer",
                objectFit: "cover",
                border:
                  mainImage === img
                    ? "3px solid black"
                    : "1px solid gray",
              }}
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div
        style={{
          fontSize: "18px",
          lineHeight: "2",
          marginTop: "40px",
        }}
      >
        <p>
          <strong>Description:</strong> {product.description}
        </p>

        <p>
          <strong>Category:</strong> {product.category_name}
        </p>

        <p>
          <strong>Size:</strong> {product.size}
        </p>

        <p>
          <strong>Color:</strong> {product.color}
        </p>

        <p>
          <strong>Material:</strong> {product.material}
        </p>

        <p>
          <strong>Care Instruction:</strong> {product.care_instruction}
        </p>
      </div>

      {/* Contact Buttons */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
        }}
      >
        <a href="tel:+919876543210">
          <button>📞 Call Now</button>
        </a>

        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
        >
          <button>💬 WhatsApp</button>
        </a>
      </div>
    </div>
  );
}

export default ProductDetails;