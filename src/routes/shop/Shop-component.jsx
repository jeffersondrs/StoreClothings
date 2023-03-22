import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.action.js";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector.js";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";

export default function Shop() {
  const categoriesMap = useSelector(selectCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]);
  const value = { categoriesMap };

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
