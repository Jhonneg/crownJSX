import "./styles.scss";
import Button from "../button";
import CartItem from "../cart-item";

export default function CardDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {[].map((item) => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
}
