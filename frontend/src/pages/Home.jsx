
import React, { useState, useEffect } from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  /*PRODUCT ARRAY*/
      const trendingProducts = [
  {
    image: "/images/trend1.jpg",
    name: "Cotton Shirt",
    price: "₹899"
  },
  {
    image: "/images/trend2.jpg",
    name: "Formal Trouser",
    price: "₹1299"
  },
  {
    image: "/images/trend3.jpg",
    name: "Kurta Pajama",
    price: "₹1499"
  },
  {
    image: "/images/trend4.jpg",
    name: "Printed Shirt",
    price: "₹999"
  },
  {
    image: "/images/trend5.jpg",
    name: "Denim Jeans",
    price: "₹1299"
  },
  {
    image: "/images/trend6.jpg",
    name: "Blazer",
    price: "₹2799"
  }
];

const newArrivals = [
  {
    image: "/images/new1.jpg",
    name: "Premium Kurta",
    price: "₹1299"
  },
  {
    image: "/images/new2.jpg",
    name: "Casual Shirt",
    price: "₹999"
  },
  {
    image: "/images/new3.jpg",
    name: "Ethnic Wear",
    price: "₹1499"
  },
  {
    image: "/images/new4.jpg",
    name: "Party Wear",
    price: "₹1799"
  },
  {
    image: "/images/new5.jpg",
    name: "Cotton Saree",
    price: "₹2199"
  },
  {
    image: "/images/new6.jpg",
    name: "Denim Jacket",
    price: "₹1899"
  }
];


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

  /* REACT SLICK SETTINGS */
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

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
            banners.map((item, index) => (
              <span
                key={item.id}
                className={
                  currentBanner === index
                    ? "active-dot"
                    : ""
                }
                onClick={() => setCurrentBanner(index)}
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

      {/*  SHOP BY CATEGORY */}
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

      {/*  PROMOTIONAL BANNERS*/}
      <section className="promo-section">

  <div className="promo-card">
    <img src="/images/promo1.jpg" alt="Wedding Collection" />

    <div className="promo-content">
      <h3>Wedding Collection</h3>
      <p>Premium styles for every celebration.</p>
      <button className="hero-btn">Shop Now</button>
    </div>
  </div>

  <div className="promo-card">
    <img src="/images/promo2.jpg" alt="Sale" />

    <div className="promo-content">
      <h3>Flat 50% OFF</h3>
      <p>Exclusive offers on selected collections.</p>
      <button className="hero-btn">Shop Now</button>
    </div>
  </div>

  <div className="promo-card">
    <img src="/images/promo3.jpg" alt="New Arrivals" />

    <div className="promo-content">
      <h3>New Arrivals</h3>
      <p>Discover the latest fashion trends.</p>
      <button className="hero-btn">Shop Now</button>
    </div>
  </div>

</section>


{/* TRENDING PRODUCT */}

<section className="trending-section">

  <div className="section-title">
    <h2>Trending Now</h2>
    <p>Most Loved Fashion Collection</p>
  </div>

  <Slider {...settings}>

    {trendingProducts.map((item, index) => (

      <div key={index} className="slide-item">

        <div className="home-product-card">

          <img src={item.image} alt={item.name} />

          <h3>{item.name}</h3>

          <p>{item.price}</p>

        </div>

      </div>

    ))}

  </Slider>

  <div className="view-all">
    <button>View All Products</button>
  </div>

</section>

{/* ================= STATISTICS ================= */}
     {/* TRUST SECTION */}

<section className="trust-section">

  <div className="trust-item">
    <span className="trust-icon">🏅</span>
    <h3>10+</h3>
    <p>Years of Trust</p>
  </div>

  <div className="trust-item">
    <span className="trust-icon">👥</span>
    <h3>5000+</h3>
    <p>Happy Customers</p>
  </div>

  <div className="trust-item">
    <span className="trust-icon">🧵</span>
    <h3>1000+</h3>
    <p>Premium Products</p>
  </div>

  <div className="trust-item">
    <span className="trust-icon">✅</span>
    <h3>100%</h3>
    <p>Quality Assured</p>
  </div>

</section>


{/* ================= FEATURED BRANDS ================= */}
<section className="brands-section">

  <div className="section-title">
    <h2>Top Brands</h2>
  </div>

  <div className="brands-container">

    <div className="brand-card">
      <img src="/images/brand1.png" alt="Raymond" />
    </div>

    <div className="brand-card">
      <img src="/images/brand2.png" alt="Louis Philippe" />
    </div>

    <div className="brand-card">
      <img src="/images/brand3.png" alt="Van Heusen" />
    </div>

    <div className="brand-card">
      <img src="/images/brand4.png" alt="Allen Solly" />
    </div>

    <div className="brand-card">
      <img src="/images/brand5.png" alt="Peter England" />
    </div>

    <div className="brand-card">
      <img src="/images/brand6.png" alt="Biba" />
    </div>

  </div>

</section>

      
      {/* ================= NEW ARRIVALS ================= */}
      <section className="products-section">

  <div className="section-title">
    <h2>New Arrivals</h2>
    <p>Explore Our Collections</p>
  </div>

  <Slider {...settings}>
    {newArrivals.map((item, index) => (
      <div key={index} className="slide-item">
        <div className="home-product-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      </div>
    ))}
  </Slider>

  <div className="view-all">
    <button>View All Products</button>
  </div>

</section>
     
      
    </div>
  );
};
export default Home;