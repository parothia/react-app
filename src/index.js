import React from "react";
import * as ReactDOMClient from "react-dom/client";
import Routes from "./Router";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<Routes />);
