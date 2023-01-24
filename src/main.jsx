import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScreenFixedProvider from "./components/common/context/ScreenFixedProvider";
import LayoutProvider from "./contexts/LayoutProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LayoutProvider>
      <ScreenFixedProvider>
      <App />
      </ScreenFixedProvider>
    </LayoutProvider>
  </React.StrictMode>
);
