# Razorpay Payment - Backend

This is the backend part of the Razorpay payment learning project.

## 🛠️ Technologies

* Node.js
* Express.js
* Razorpay
* dotenv
* CORS
* Crypto

## 📌 Features

* Create Razorpay orders
* Handle payment verification
* Verify Razorpay payment signatures
* Keep Razorpay Secret Key on the backend
* Provide payment APIs for the frontend

## 📡 API Routes

### Create Order

```http
POST /api/payment/create-order
```

Creates a Razorpay order.

### Verify Payment

```http
POST /api/payment/verify
```

Verifies the payment signature received from Razorpay.

## 🔐 Environment Variables

Create a `.env` file:

```env
PORT=3000
RAZORPAY_KEY_ID=your_test_key_id
RAZORPAY_KEY_SECRET=your_test_key_secret
```

> Never share or upload the Razorpay Secret Key to GitHub.

## ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node app.js
```

The backend runs on:

```text
http://localhost:3000
```

## 🔄 Payment Flow

```text
Frontend
   ↓
Create Order API
   ↓
Razorpay
   ↓
Payment
   ↓
Verify Payment API
   ↓
Signature Verification
   ↓
Payment Success
```
