import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ProductCartContainer, Footer, Name, Price } from "./styles.jsx";
import Button, { BUTTON_TYPES_CLASS } from "../button";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASS.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCartContainer>
  );
}
