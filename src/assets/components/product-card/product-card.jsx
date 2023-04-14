import Button, { btnTypesClasses } from "../button/button.component";
import {
  Footer,
  Name,
  Price,
  ProductCartContainer,
} from "./product-card.styles";
import { addItemToCart } from "../../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../store/cart/cart.selector";

export default function ShoppingCart({ product }) {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={btnTypesClasses.inverted} onClick={addProductToCart}>
        Adicionar
      </Button>
    </ProductCartContainer>
  );
}
