import {
  CheckoutItemContainer,
  ArrowContainer,
  Image,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer,
} from "./checkout-item.styles";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../../store/cart/cart.action";
import { selectCartItems } from "../../../store/cart/cart.selector";

export default function CkeckoutItem({ cartItem }) {
  const dispatch = useDispatch();

  const { name, price, quantity, imageUrl } = cartItem;

  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <ArrowContainer onClick={removeItemHandler}>&#10094;</ArrowContainer>
        <TextContainer>{quantity}</TextContainer>
        <ArrowContainer onClick={addItemHandler}>&#10095;</ArrowContainer>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={clearItemHandler}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}
