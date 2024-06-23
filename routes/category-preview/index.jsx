import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../src/contexts/categories.context";

const CategoryPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
