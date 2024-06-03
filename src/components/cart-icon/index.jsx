import "./styles.scss";
import shoppingicon from "../../assets/shopping-bag.svg";

export default function CartIcon() {
  return (
    <div className="cart-icon-container">
      <img className="shopping-icon" src={shoppingicon} />
      <span className="item-count">0</span>
    </div>
  );
}
