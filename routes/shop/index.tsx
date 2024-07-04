import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../categories-preview";
import Category from "../category";
import { fetchCategoriesStart } from "../../src/store/categories/category.action";
import { useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
