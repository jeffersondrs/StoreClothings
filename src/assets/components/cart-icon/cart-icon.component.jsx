import "./cart-icon-styles.scss";
import { BiShoppingBag } from "react-icons/bi";

export default function CartIcon() {
  return (
    <div className="cart-icon-container">
      <BiShoppingBag className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
