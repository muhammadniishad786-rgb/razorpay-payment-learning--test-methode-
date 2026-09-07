// Import the CSS file for styling this component
import { useNavigate } from "react-router-dom";
import "./Payment.css";


// Payment component
function Payment() {

  const navigate = useNavigate()

  // Amount displayed on our payment page
  const amount = 500;


  // Function that runs when the user clicks "Pay ₹500"
  const handlePayment = async () => {

    try {

      // Send a request to our backend to create a Razorpay order
      const response = await fetch(
        "http://localhost:3000/api/payment/create-order",
        {
          // We are creating something, so we use POST
          method: "POST",

          // Tell the backend that we are sending JSON data
          headers: {
            "Content-Type": "application/json",
          },
        },
      );


      // Convert the backend response from JSON into a JavaScript object
      const data = await response.json();


      // Check the order response in the browser console
      console.log("order created: ", data);


      // Razorpay Checkout settings
      // These options tell Razorpay how the payment should be displayed
      const options = {

        // Razorpay Key ID from the frontend .env file
        // This identifies our Razorpay account
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        // Amount received from the Razorpay order
        // Example: ₹500 = 50000 paise
        amount: data.order.amount,

        // Currency received from the backend
        // In our case it is INR
        currency: data.order.currency,

        // Name displayed in Razorpay Checkout
        name: "Razorpay Test",

        // Description displayed in Razorpay Checkout
        description: "Test Payment",

        // Razorpay order ID created by our backend
        order_id: data.order.id,


        // This function runs after the user completes the payment
        handler: async function (response) {

          try {

            // Send the payment details to our backend
            // The backend will verify whether the payment is genuine
            const verifyResponse = await fetch(
              "http://localhost:3000/api/payment/verify-order",
              {
                // We are sending payment details to the backend
                method: "POST",

                // Tell the backend we are sending JSON
                headers: {
                  "Content-Type": "application/json",
                },

                // Convert the Razorpay response into JSON
                body: JSON.stringify(response),
              },
            );


            // Convert the verification response into a JavaScript object
            const verifyData = await verifyResponse.json();


            // Show the verification result in the browser console
            console.log("Verification response:", verifyData);


            // Check whether the backend verified the payment
            if (verifyData.success) {

              // Payment is genuine and successfully verified
              alert("Payment verified successfully!");
              navigate("/order-placed")
            } else {

              // Payment verification failed
              alert("Payment verification failed!");
            }


          } catch (error) {

            // Handle errors that happen during payment verification
            console.error("Verification error:", error.message);
          }
        },
      };


      // Create a Razorpay Checkout object using our options
      const razorpay = new window.Razorpay(options);


      // Open the Razorpay payment UI
      razorpay.open();


    } catch (err) {

      // Handle errors that happen while creating the Razorpay order
      console.error("Payment error: ", err.message);
    }
  };


  // UI of our payment page
  return (
    <div className="payment-page">

      {/* Main payment card */}
      <div className="payment-card">

        {/* Rupee icon */}
        <div className="payment-icon">₹</div>


        {/* Page heading */}
        <h1>Complete Payment</h1>


        {/* Description */}
        <p className="payment-description">
          Securely complete your payment using Razorpay.
        </p>


        {/* Amount section */}
        <div className="amount-section">

          {/* Text above the amount */}
          <span>Amount to pay</span>

          {/* Display the amount */}
          <h2>₹{amount}</h2>

        </div>


        {/* Button that starts the payment process */}
        <button
          className="pay-button"
          onClick={handlePayment}
        >
          Pay ₹{amount}
        </button>


        {/* Security message */}
        <div className="secure-payment">
          🔒 Secure payment powered by Razorpay
        </div>

      </div>
    </div>
  );
}


// Export the Payment component so App.jsx can use it
export default Payment;