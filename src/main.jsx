import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ProductProvider } from "./contexts/product.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
