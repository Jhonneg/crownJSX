import "./styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart } = useContext(CartContext);
  const clearItemHander = () => clearItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHander}>
        X
      </div>
    </div>
  );
}
