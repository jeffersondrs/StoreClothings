import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCart from "../../assets/components/product-card/product-card";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector.js";
import "./category.styles.scss";

export default function Category() {
  const categoriesMap = useSelector(selectCategories);
  const { category } = useParams();
  const [categoryItems, setCategoryItems] = useState(categoriesMap[category]);
  useEffect(() => {
    setCategoryItems(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title mx-10">{category.toUpperCase()}</h2>
      <div className="category-container">
        {categoryItems &&
          categoryItems.map((item) => (
            <ProductCart key={item.id} product={item} />
          ))}
      </div>
    </>
  );
}
