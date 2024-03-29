export default function CartItem({ cartItem }) {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <div className="flex p-1">
      <img className="w-16 h-20 m-1" src={imageUrl} alt={`${name}`}></img>
      <div className="flex flex-col justify-end">
        <span>{name}</span>
        <span>
          {quantity} X R$ {price}
        </span>
      </div>
    </div>
  );
}
