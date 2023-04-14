import { Fragment } from "react";
import CategoryPreview from "../../assets/components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap, selectCategoryIsLoading } from '../../store/categories/category.selector';
import Spinner from "../../assets/components/spinner/spinner";

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoryIsLoading);

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
}
