import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./features/Home";
import { Provider } from "react-redux";
import store from "./features/store/store";
import Crypto from "./features/crypto";
import Navbar from "./features/barfoot/Navbar";
import Footer from "./features/barfoot/Footer";
function Rasta() {
  return (
    <div className="main p-8 w-screen min-h-screen min-w-full flex flex-col justify-between">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}
export default Rasta;
