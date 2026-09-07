import "./OrderPlaced.css";

function OrderPlaced() {
  return (
    <div className="order-page">
      <div className="order-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed!</h1>

        <p>
          Your payment was successful and your order has been placed.
        </p>

        <button onClick={() => window.location.href = "/"}>
          Continue Shopping
        </button>

      </div>
    </div>
  );
}

export default OrderPlaced;