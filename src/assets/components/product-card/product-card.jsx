import Button, { btnTypesClasses } from "../button/button.component";
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./product-card.styles";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

export default function ShoppingCart({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={btnTypesClasses.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
}
