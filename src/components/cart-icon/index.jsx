import { ShoppingIcon, ItemCount, CartIconContainer } from "./styles.jsx";
import shoppingicon from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={shoppingicon} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
