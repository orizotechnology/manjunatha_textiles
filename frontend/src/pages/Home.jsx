import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {

  // Banner Slider
  const banners = [
    {
      id: 1,
      image: "/images/banner1.jpg",
      title: "Premium Fashion Collection",
      subtitle: "Elegant styles crafted for every occasion"
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
      title: "New Season Arrivals",
      subtitle: "Discover the latest trends in fashion"
    },
    {
      id: 3,
      image: "/images/banner3.jpg",
      title: "Traditional & Modern Wear",
      subtitle: "Celebrate your style with premium fabrics"
    }
  ];
const [currentBanner, setCurrentBanner] = useState(0);

 // Auto Slider
  useEffect(() => {

    const slider = setInterval(() => {

      setCurrentBanner((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );

    }, 4000);
    return () => clearInterval(slider);

  }, []);

  return (
    <div className="home-container">


      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">
        <img
          src={banners[currentBanner].image}
          alt="banner"
          className="hero-image"
        />

        <div className="hero-overlay">
         <h1>
            {banners[currentBanner].title}
          </h1>
           <p>
            {banners[currentBanner].subtitle}
          </p>


          <button className="hero-btn">
            Shop Now
          </button>


        </div>
      
      {/* Slider Dots */}

        <div className="slider-dots">

          {
            banners.map((item,index)=>(

              <span
                key={item.id}
                className={
                  currentBanner === index
                  ? "active-dot"
                  : ""
                }

                onClick={()=>setCurrentBanner(index)}

              ></span>

            ))
          }


        </div>


      </section>

    {/* ================= OFFERS SECTION ================= */}


      <section className="offers-section">


        <div className="offer-card">


          <div className="offer-icon">
            🚚
          </div>


          <div>

            <h3>
              Free Shipping
            </h3>


            <p>
              On orders above ₹999
            </p>

          </div>


        </div>





        <div className="offer-card">


          <div className="offer-icon">
            💳
          </div>


          <div>

            <h3>
              Secure Payment
            </h3>


            <p>
              100% Safe & Secure Checkout
            </p>

          </div>


        </div>

      <div className="offer-card">


          <div className="offer-icon">
            🔄
          </div>


          <div>

            <h3>
              Easy Returns
            </h3>


            <p>
              Hassle free return policy
            </p>

          </div>


        </div>





        <div className="offer-card">


          <div className="offer-icon">
            🎁
          </div>


          <div>

            <h3>
              Exclusive Offers
            </h3>


            <p>
              Special discounts everyday
            </p>

          </div>


        </div>



      </section>

            {/* ================= SHOP BY CATEGORY ================= */}


      <section className="category-section">


        <div className="section-title">

          <h2>
            Shop By Category
          </h2>

          <p>
            Explore our premium collections
          </p>

        </div>




        <div className="category-grid">


          <div className="category-card">

            <img
              src="/images/mens.jpg"
              alt="Mens Wear"
            />

            <div className="category-content">

              <h3>
                Men's Wear
              </h3>

              <button>
                Explore
              </button>

            </div>

          </div>





          <div className="category-card">

            <img
              src="/images/womens.jpg"
              alt="Womens Wear"
            />


            <div className="category-content">

              <h3>
                Women's Wear
              </h3>


              <button>
                Explore
              </button>

            </div>


          </div>





          <div className="category-card">


            <img
              src="/images/kids.jpg"
              alt="Kids Wear"
            />


            <div className="category-content">

              <h3>
                Kids Wear
              </h3>


              <button>
                Explore
              </button>


            </div>


          </div>





          <div className="category-card">


            <img
              src="/images/traditional.jpg"
              alt="Traditional Wear"
            />


            <div className="category-content">


              <h3>
                Traditional Wear
              </h3>


              <button>
                Explore
              </button>


            </div>


          </div>



        </div>



      </section>






      {/* ================= PROMOTIONAL BANNERS ================= */}



      <section className="promo-section">


        <div className="promo-banner">


          <img
            src="/images/promo1.jpg"
            alt="promo"
          />


          <div className="promo-content">


            <h2>
              Festive Collection
            </h2>


            <p>
              Celebrate every occasion with stylish outfits
            </p>


            <button>
              View Collection
            </button>


          </div>


        </div>






        <div className="promo-banner">


          <img
            src="/images/promo2.jpg"
            alt="promo"
          />


          <div className="promo-content">


            <h2>
              Latest Trends
            </h2>


            <p>
              Upgrade your wardrobe with new arrivals
            </p>


            <button>
              Shop Now
            </button>


          </div>


        </div>



      </section>







      {/* ================= FEATURED BRANDS ================= */}



      <section className="brands-section">


        <div className="section-title">


          <h2>
            Featured Brands
          </h2>


          <p>
            Shop from popular fashion brands
          </p>


        </div>






        <div className="brands-grid">



          <div className="brand-card">

            <img
              src="/images/brand1.png"
              alt="Raymond"
            />

          </div>




          <div className="brand-card">

            <img
              src="/images/brand2.png"
              alt="Arrow"
            />

          </div>





          <div className="brand-card">

            <img
              src="/images/brand3.png"
              alt="Van Heusen"
            />

          </div>





          <div className="brand-card">

            <img
              src="/images/brand4.png"
              alt="Louis Philippe"
            />

          </div>





          <div className="brand-card">

            <img
              src="/images/brand5.png"
              alt="Biba"
            />

          </div>



        </div>



      </section>

            {/* ================= NEW ARRIVALS ================= */}


      <section className="products-section">


        <div className="section-title">

          <h2>
            New Arrivals
          </h2>


          <p>
            Latest fashion picks for you
          </p>


        </div>




        <div className="product-grid">



          <div className="home-product-card">


            <img
              src="/images/new1.jpg"
              alt="New Arrival"
            />


            <h3>
              Designer Kurta
            </h3>


            <p>
              Premium Cotton Collection
            </p>


            <button>
              Shop Now
            </button>


          </div>






          <div className="home-product-card">


            <img
              src="/images/new2.jpg"
              alt="New Arrival"
            />


            <h3>
              Casual Shirt
            </h3>


            <p>
              Modern Style Wear
            </p>


            <button>
              Shop Now
            </button>


          </div>






          <div className="home-product-card">


            <img
              src="/images/new3.jpg"
              alt="New Arrival"
            />


            <h3>
              Ethnic Wear
            </h3>


            <p>
              Traditional Fashion
            </p>


            <button>
              Shop Now
            </button>


          </div>






          <div className="home-product-card">


            <img
              src="/images/new4.jpg"
              alt="New Arrival"
            />


            <h3>
              Party Wear
            </h3>


            <p>
              Elegant Collection
            </p>


            <button>
              Shop Now
            </button>


          </div>



        </div>


      </section>








      {/* ================= TRENDING PRODUCTS ================= */}



      <section className="trending-section">


        <div className="section-title">


          <h2>
            Trending Products
          </h2>


          <p>
            Most loved styles this season
          </p>


        </div>






        <div className="product-grid">



          <div className="home-product-card">


            <img
              src="/images/trend1.jpg"
              alt="Trending"
            />


            <h3>
              Premium Saree
            </h3>


            <p>
              Silk Collection
            </p>


            <button>
              Buy Now
            </button>


          </div>






          <div className="home-product-card">


            <img
              src="/images/trend2.jpg"
              alt="Trending"
            />


            <h3>
              Formal Shirt
            </h3>


            <p>
              Office Wear
            </p>


            <button>
              Buy Now
            </button>


          </div>






          <div className="home-product-card">


            <img
              src="/images/trend3.jpg"
              alt="Trending"
            />


            <h3>
              Designer Dress
            </h3>


            <p>
              Latest Fashion
            </p>


            <button>
              Buy Now
            </button>


          </div>






          <div className="home-product-card">


            <img
              src="/images/trend4.jpg"
              alt="Trending"
            />


            <h3>
              Kids Collection
            </h3>


            <p>
              Comfortable Wear
            </p>


            <button>
              Buy Now
            </button>


          </div>



        </div>



      </section>









      {/* ================= STATISTICS ================= */}



      <section className="stats-section">



        <div className="stat-box">

          <h2>
            10+
          </h2>

          <p>
            Years Experience
          </p>

        </div>





        <div className="stat-box">

          <h2>
            5000+
          </h2>

          <p>
            Happy Customers
          </p>

        </div>





        <div className="stat-box">

          <h2>
            1000+
          </h2>

          <p>
            Premium Products
          </p>

        </div>





        <div className="stat-box">

          <h2>
            50+
          </h2>

          <p>
            Fashion Collections
          </p>

        </div>



      </section>





    </div>

  );

};


export default Home;