function Collections() {
  const collections = [
    "Men's Wear",
    "Women's Wear",
    "Kids Wear",
    "Traditional Wear",
    "Casual Wear",
    "Party Wear",
    "Seasonal Collections",
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>Our Collections</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {collections.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "30px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;