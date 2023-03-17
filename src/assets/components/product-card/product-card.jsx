import Button,{ btnTypesClasses } from "../button/button.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";

export default function ShoppingCart({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer px-3">
        <span className="name">{name}</span>
        <span className="price">R${price}</span>
      </div>
      <Button buttonType={btnTypesClasses.inverted} onClick={addProductToCart}>
        Add to Card
      </Button>
    </div>
  );
}
