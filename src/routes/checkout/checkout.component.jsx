import { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from "./checkout.styles";
import { CartContext } from "../../contexts/cart.context";
import CkeckoutItem from "../../assets/components/checkout-item/checkout-item.component";
export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Produto</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Descrição</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantidade</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Preço</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remover</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
        {cartItems.map((cartItem) => (
          <CkeckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      <TotalContainer>Total: R$ {cartTotal}</TotalContainer>
    </CheckoutContainer>
  );
}
