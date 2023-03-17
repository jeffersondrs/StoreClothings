import { CartIconContainer, ItemCountContainer } from "./cart-icon-styles";
import { useContext } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { CartContext } from "../../../contexts/cart.context";
export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const togleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={togleIsCartOpen}>
      <BiShoppingBag className="w-14 h-14" />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
}
