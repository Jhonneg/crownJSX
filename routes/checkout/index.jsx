import { useContext } from "react";
import { CartContext } from "../../src/contexts/cart.context";
import "./styles.scss";

export default function Checkout() {
  const { cartItems, addItemToCart } = useContext(CartContext);
  return (
    <div>
      <h1>i am the checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>decrement</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
