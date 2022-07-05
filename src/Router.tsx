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
    <div className="main p-8 w-screen min-h-screen flex flex-col justify-between min-w-[450px] overflow-auto">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="react-app/" element={<Home />} />
          <Route path="react-app/crypto" element={<Crypto />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}
export default Rasta;
