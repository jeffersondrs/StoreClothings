import {
  CheckoutItemContainer,
  ArrowContainer,
  Image,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer,
} from "./checkout-item.styles";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

export default function CkeckoutItem({ cartItem }) {
  const { name, price, quantity, imageUrl } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <ArrowContainer onClick={removeItemHandler}>
          &#10094;
        </ArrowContainer>
        <TextContainer>{quantity}</TextContainer>
        <ArrowContainer onClick={addItemHandler}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={clearItemHandler}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
}
