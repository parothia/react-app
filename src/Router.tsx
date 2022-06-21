import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import OnboardLayout from "./components/OnboardLayout";
import Login from "./features/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <switch>
        <OnboardLayout content={<Login />} />
      </switch>
    </BrowserRouter>
  );
};
export default Routes;
