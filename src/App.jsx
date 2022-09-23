import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Shop from "./assets/components/shop-items/Shop-component";
import Navegation from "./routes/navegation/Navegation-component";
import SignIn from "./sign-in.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navegation />}>
        <Route path="" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
