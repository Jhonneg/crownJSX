import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES_CLASS } from "../button";
import { PaymentFormContainer, FormContainer } from "./styles";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  async function paymentHandler(e) {
      e.preventDefault();
      
      if (!stripe || !elements) {
          return
      } 
      



  }

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPES_CLASS.inverted}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
}
