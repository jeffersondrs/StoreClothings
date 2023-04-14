import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from "./checkout.styles";
import CkeckoutItem from "../../assets/components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import PaymentForm from "../../assets/components/payment-form/payment-form.component";

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <PaymentForm />
    </CheckoutContainer>
  );
}
