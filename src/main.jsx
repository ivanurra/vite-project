import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title="Hi, " subTitle="Paul"/>
  </React.StrictMode>
);
