import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../categories-preview";
import Category from "../category";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
