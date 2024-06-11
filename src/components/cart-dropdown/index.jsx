import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import "./styles.jsx";
import Button from "../button";
import CartItem from "../cart-item";

export default function CardDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  function goToCheckoutHandler() {
    navigate("/checkout");
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span>Your Cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
}
