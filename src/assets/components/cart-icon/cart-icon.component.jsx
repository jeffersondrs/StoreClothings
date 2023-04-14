import { CartIconContainer, ItemCountContainer } from "./cart-icon-styles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsOpen,
  selectCartCount,
} from "../../../store/cart/cart.selector";
import { setIsCartOpen } from "../../../store/cart/cart.action";
import { BiShoppingBag } from "react-icons/bi";

export default function CartIcon() {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsOpen);
  const cartCount = useSelector(selectCartCount);

  const togleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={togleIsCartOpen}>
      <BiShoppingBag className="w-14 h-14" />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
}
