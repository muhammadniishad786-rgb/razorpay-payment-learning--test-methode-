import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Payment from "../pages/paymentPag/Payment";
import OrderPlaced from "../pages/orderplaced/OrderPlaces";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
