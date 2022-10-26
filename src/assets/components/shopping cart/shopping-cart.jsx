import Button from "../button/button.component";
import "./product-card.styles.scss";

export default function ShoppingCart({ product }) {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer px-3">
        <span className="name">{name}</span>
        <span className="price">R${price}</span>
      </div>
      <Button buttonType="inverted">Add to Card</Button>
    </div>
  );
}
