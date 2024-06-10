import { useContext } from "react";
import { CategoriesContext } from "../../src/contexts/categories.context";
import "./styles.scss";

export default function CategoryPreview() {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
