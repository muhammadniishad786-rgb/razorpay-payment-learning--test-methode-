import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoute.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/payment", paymentRoutes)

app.get("/", (req, res) => {
  res.send("Razorpay backend is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});