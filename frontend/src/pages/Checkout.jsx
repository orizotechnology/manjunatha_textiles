import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import axios from "axios";

function Checkout() {

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });


  // Load Cart
  useEffect(() => {

    axios
      .get("http://localhost:5000/cart")
      .then((res) => {
        setCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);



  const totalAmount = cart.reduce(
    (sum, item) =>
      sum + Number(item.price || 0) * Number(item.quantity),
    0
  );


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const placeOrder = async (e) => {

    e.preventDefault();


    if (!formData.name || !formData.phone || !formData.address) {

      alert("Please fill all required fields.");
      return;

    }


    if (cart.length === 0) {

      alert("Cart is empty");
      return;

    }



    try {

      const orderData = {

        product_id: cart[0].product_id,

        customer_name: formData.name,

        quantity: cart[0].quantity,

        address: formData.address,

        phone: formData.phone

      };



      await axios.post(
        "http://localhost:5000/orders",
        orderData
      );


      // Clear Cart after order
      await axios.delete(
        "http://localhost:5000/cart"
      );


      alert("Order Placed Successfully!");


      navigate("/order-success");


    } catch (error) {

      console.log(error);
      alert("Order failed");

    }

  };



  return (

    <div className="checkout-page">


      <h1 className="checkout-title">
        Secure Checkout
      </h1>



      <div className="checkout-container">


        <form
          className="checkout-form"
          onSubmit={placeOrder}
        >

          <h2>Billing Details</h2>


          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />


          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />


          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />


          <textarea
            name="address"
            rows="5"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>



          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
          >

            <option>
              Cash on Delivery
            </option>

            <option>
              UPI
            </option>

            <option>
              Credit / Debit Card
            </option>

          </select>



          <button
            type="submit"
            className="place-order-btn"
          >
            Place Order
          </button>


        </form>




        <div className="order-summary">


          <h2>
            Order Summary
          </h2>



          <div className="summary-box">


            <p>
              <span>Items</span>
              <span>{cart.length}</span>
            </p>



            <p>
              <span>Delivery</span>
              <span>FREE</span>
            </p>


            <hr />


            <h3>

              <span>Total</span>

              <span>
                ₹{totalAmount}
              </span>

            </h3>


          </div>


        </div>


      </div>


    </div>

  );

}

export default Checkout;