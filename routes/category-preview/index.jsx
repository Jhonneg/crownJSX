import { Fragment } from "react";
import Spinner from "../../src/components/spinner";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../src/store/categories/category.selector";
import { useSelector } from "react-redux";

const CategoryPreview = () => {
  const categoriesMap = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
