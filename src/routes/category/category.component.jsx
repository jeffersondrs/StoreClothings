import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ProductCart from "../../assets/components/product-card/product-card";

import { CategoriesContext } from "../../contexts/categories.context";
import "./category.styles.scss";

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [categoryItems, setCategoryItems] = useState(categoriesMap[category]);

  useEffect(() => {
    setCategoryItems(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="title mx-10">{category.toUpperCase()}</h2>
      <div className="category-container">
        {categoryItems &&
          categoryItems.map((item) => (
            <ProductCart key={item.id} product={item} />
          ))}
      </div>
    </>
  );
}
