import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./styles.scss";
import Button from "../button";
import CartItem from "../cart-item";

export default function CardDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
}
