# Razorpay Payment - Frontend

This is the frontend part of the Razorpay payment learning project.

## 🛠️ Technologies

* React
* Vite
* JavaScript
* CSS
* Razorpay Checkout

## 📌 Features

* Payment page UI
* Creates payment order through backend API
* Opens Razorpay Checkout
* Sends payment details to backend for verification
* Displays payment verification result

## ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 🔐 Environment Variable

Create a `.env` file:

```env
VITE_RAZORPAY_KEY_ID=your_test_key_id
```

> Only the Razorpay Key ID is used in the frontend. Never put the Razorpay Secret Key here.

## 🔄 Payment Flow

```text
User clicks Pay
       ↓
Backend creates Razorpay order
       ↓
Razorpay Checkout opens
       ↓
User completes payment
       ↓
Payment details sent to backend
       ↓
Backend verifies payment
```
