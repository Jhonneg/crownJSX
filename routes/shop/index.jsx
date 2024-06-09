import { useContext } from "react";
import { CategoriesContext } from "../../src/contexts/categories.context";
import ProductCard from "../../src/components/product-cart";
import "./styles.scss";

export default function Shop() {
  const { products } = useContext(CategoriesContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
