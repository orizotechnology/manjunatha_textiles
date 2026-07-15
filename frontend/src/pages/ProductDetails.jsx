import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetails.css";

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
      .catch((err) => {
        console.log(err);
      });

  }, [id]);


  if (!product) {
    return (
      <h2 className="loading">
        Loading...
      </h2>
    );
  }


  const images = [
    product.image1,
    product.image2,
    product.image3,
  ].filter(Boolean);


  return (

    <div className="details-container">


      <h1 className="product-title">
        {product.product_name}
      </h1>



      {/* Image Gallery */}

      <div className="image-section">


        <div className="main-image-box">

          <img
            className="main-image"
            src={`/${mainImage}`}
            alt={product.product_name}
          />

        </div>



        <div className="thumbnails">

          {images.map((img, index) => (

            <img
              key={index}
              className={
                mainImage === img
                ? "thumbnail active"
                : "thumbnail"
              }
              src={`/${img}`}
              alt="thumbnail"
              onClick={() => setMainImage(img)}
            />

          ))}

        </div>


      </div>




      {/* Product Information */}

      <div className="product-details">


        <p>
          <strong>Description:</strong>
          <br />
          {product.description}
        </p>


        <p>
          <strong>Category:</strong>
          {product.category_name}
        </p>


        <p>
          <strong>Size:</strong>
          {product.size}
        </p>


        <p>
          <strong>Color:</strong>
          {product.color}
        </p>


        <p>
          <strong>Material:</strong>
          {product.material}
        </p>


        <p>
          <strong>Care Instruction:</strong>
          {product.care_instruction}
        </p>


      </div>




      {/* Contact Buttons */}

      <div className="contact-buttons">


        <a href="tel:+919876543210">
          <button>
            📞 Call Now
          </button>
        </a>


        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
        >

          <button>
            💬 WhatsApp
          </button>

        </a>


      </div>


    </div>

  );
}


export default ProductDetails;