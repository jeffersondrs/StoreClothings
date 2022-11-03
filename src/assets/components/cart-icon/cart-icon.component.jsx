import "./cart-icon-styles.scss";
import { useContext } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { CartContext } from "../../../contexts/cart.context";
export default function CartIcon() {
  const { cartItens } = useContext(CartContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const togleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={togleIsCartOpen}>
      <BiShoppingBag className="shopping-icon" />
      <span className="item-count"></span>
    </div>
  );
}
