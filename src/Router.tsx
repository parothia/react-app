import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./features/Home/home";
import Login from "./features/Login";
import { Provider } from "react-redux";
import store from "./features/store/store";
import CryptoApp from "./features/crypto";
import Navbar from "./features/navbar";
function Rasta() {
  return (
    <div className="main p-8 w-screen min-h-screen">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<CryptoApp />} />
          {/* <Login /> */}
        </Routes>
      </Provider>
    </div>
  );
}
export default Rasta;
