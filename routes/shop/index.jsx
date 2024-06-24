import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../categories-preview";
import Category from "../category";
import { getCategoriesAndDocuments } from "../../src/utils/firebase/firebase.utils";
import { fetchCategoriesAsync } from "../../src/store/categories/category.action";
import { useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
