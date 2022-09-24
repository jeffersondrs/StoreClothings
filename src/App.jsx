import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./assets/components/shop-items/Shop-component";
import ShoppingCart from "./assets/components/shopping cart/shopping-cart";
import Contact from "./assets/components/contact/contact-component";
import Navegation from "./routes/navegation/Navegation-component";
import SignIn from "./routes/sign/sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navegation />}>
        <Route path="" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
