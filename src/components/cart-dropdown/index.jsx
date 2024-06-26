import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, EmptyMessage, CartItems } from "./styles.jsx";
import Button from "../button";
import CartItem from "../cart-item";
import { selectCartItems } from "../../store/cart/cart.selector.js";

export default function CardDropdown() {
  const cartItems = useSelector(selectCartItems);
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
