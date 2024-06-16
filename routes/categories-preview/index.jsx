import { useContext } from "react";
import { CategoriesContext } from "../../src/contexts/categories.context";
import CategoryPreview from "../../src/components/category-preview";


export default function CategoriesPreview() {
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
