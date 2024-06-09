import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../src/contexts/categories.context";
import ProductCard from "../../src/components/product-cart";
import "./styles.scss";

export default function Shop() {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoryMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}
