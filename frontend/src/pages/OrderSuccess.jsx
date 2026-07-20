import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {

  const navigate = useNavigate();

  return (
    <div className="success-page">

      <div className="success-box">

        <div className="success-icon">
          🎉
        </div>

        <h1>
          Order Placed Successfully!
        </h1>

        <p>
          Thank you for shopping with
          <br />
          <b>Sri Manjunatha Textiles.</b>
        </p>

        <p>
          Your order has been received.
        </p>


        <button
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}

export default OrderSuccess;