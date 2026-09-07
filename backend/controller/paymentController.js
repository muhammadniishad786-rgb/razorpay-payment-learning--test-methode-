import crypto from "crypto";
import razorpay from "../config/razorpay.js";

// Create a Razorpay order
export const createOrder = async (req, res) => {
  try {
    // Payment amount and currency
    // Razorpay uses paise, so ₹500 = 500 × 100
    const options = {
      amount: 500 * 100,
      currency: "INR",

      // Create a unique receipt number
      receipt: `receipt_${Date.now()}`,
    };

    // Send order details to Razorpay and create the order
    const order = await razorpay.orders.create(options);

    // Send the created order back to the frontend
    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Verify the payment after the user completes it
export const verifyPayment = async (req, res) => {
  try {

    // Get payment details sent from the frontend
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;


    // Combine order ID and payment ID
    // This is the data used to create the signature
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;


    // Create our own signature using Razorpay Secret Key
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");


    // Compare our signature with Razorpay's signature
    if (expectedSignature === razorpay_signature) {

      // Signatures match → payment is genuine
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
      });
    }


    // Signatures don't match → payment verification failed
    return res.status(400).json({
      success: false,
      message: "Payment verification failed",
    });


  } catch (error) {

    // Handle errors
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};