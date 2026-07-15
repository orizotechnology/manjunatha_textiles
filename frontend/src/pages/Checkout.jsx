function Checkout() {
  return (
    <div className="container" style={{ padding: "50px" }}>
      <h1 style={{ textAlign: "center" }}>💳 Checkout</h1>

      <form
        style={{
          maxWidth: "600px",
          margin: "30px auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Delivery Address"></textarea>

        <select>
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Credit / Debit Card</option>
        </select>

        <button
          style={{
            padding: "12px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;