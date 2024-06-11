import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import { CartDropdownContainer, EmptyMessage, CartItems } from "./styles.jsx";
import Button from "../button";
import CartItem from "../cart-item";

export default function CardDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  function goToCheckoutHandler() {
    navigate("/checkout");
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your Cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  );
}
