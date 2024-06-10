import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../src/contexts/categories.context";
import CategoryPreview from "../../src/components/category-preview";
import "./styles.scss";

export default function Shop() {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title]
        return (
          <CategoryPreview key={title} title={title} products={products}/>
        )
      }
        
      )}
    </div>
  );
}
