import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Custom from "./Custom.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Custom />
    <App />
    <Custom />
  </StrictMode>
);
