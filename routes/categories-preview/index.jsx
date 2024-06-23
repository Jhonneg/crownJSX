import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../src/store/categories/category.selector";
import CategoryPreview from "../../src/components/category-preview";

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
