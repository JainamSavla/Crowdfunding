import React from "react";
import ReactDOM from "react-dom/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { StateContextProvider } from "./context/index.jsx";
const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="sepolia" clientId={clientId}>
      <BrowserRouter>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
