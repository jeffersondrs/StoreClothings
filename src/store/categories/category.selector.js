import { createSelector } from "reselect";

const selectCategory = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategory],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoryIsLoading = createSelector(
  [selectCategory],
  (categoriesSlice) => categoriesSlice.isLoading
);
