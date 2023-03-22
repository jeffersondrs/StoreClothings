import CATEGORIES_ACTION_TYPES from "./caterory.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesMap);
