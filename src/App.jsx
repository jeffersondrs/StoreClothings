import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./routes/shop/Shop-component";
import ProductCart from  './assets/components/product-card/product-card';
import Contact from "./assets/components/contact/contact-component";
import Navegation from "./routes/navegation/Navegation-component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navegation />}>
        <Route path="" element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="productcart" element={<ProductCart />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
