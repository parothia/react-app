import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Rasta from "./Router";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOMClient.createRoot(container);
root.render(
  <BrowserRouter>
    <Rasta />
  </BrowserRouter>
);
