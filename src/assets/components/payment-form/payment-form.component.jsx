import {
  FormContainer,
  PaymentFormContainer,
  PaymentButton,
} from "./payment-form.styles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartTotal } from "../../../store/cart/cart.selector";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { clearCart } from "../../../store/cart/cart.action";
import Button, { btnTypesClasses } from "../button/button.component";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const amout = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandle = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amout * 100 }),
    }).then((res) => res.json());

    const result = await stripe.confirmCardPayment(response.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Anônimo",
        },
      },
    });

    setIsProcessingPayment(false);

    if (result.paymentIntent.status === "succeeded") {
      dispatch(clearCart());

      alert("Pagamento realizado com sucesso!");
    }

    if (result.error) {
      console.log(result.error.message);
    }

    if (result.paymentIntent.status === "succeeded") {
    }
  };

  return (
    <PaymentFormContainer>
      {currentUser ? (
        <FormContainer onSubmit={paymentHandle}>
          <h2>Cartão de crédito: </h2>
          <CardElement />
          <PaymentButton
            isLoading={isProcessingPayment}
            buttonTypes={btnTypesClasses.inverted}
          >
            Pay
          </PaymentButton>
        </FormContainer>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center py-10">
            <h2 className="text-2xl">Olá, faça o login para continuar</h2>
            <h3 className="text-xl">Clique no botão abaixo</h3>
          </div>
          <a href="/auth">
            <Button buttonTypes={btnTypesClasses.inverted}>Login</Button>
          </a>
        </>
      )}
    </PaymentFormContainer>
  );
}
