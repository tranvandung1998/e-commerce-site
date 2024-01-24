import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
    domain="dev-l7ovkms653t15big.us.auth0.com"
    clientId="9UKGJmhOiGd3SbY6BVVkudl6CCAW9pqi"
    authorizationParams={{
      redirect_uri: window.location.origin}}>
   
    <AppProvider>
        <FilterContextProvider>
            <CartProvider>
                <App />
</CartProvider>
</FilterContextProvider>
</AppProvider>

  </Auth0Provider>,

);


reportWebVitals();