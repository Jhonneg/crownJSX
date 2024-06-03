import { useContext } from "react";
import { ProductsContext } from "../../src/contexts/products.context";
import ProductCard from "../../src/components/product-cart";
import "./styles.scss"

export default function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container" >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
