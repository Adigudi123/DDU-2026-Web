import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Sushant from "./Sushant.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Sushant />
  </StrictMode>,
);
