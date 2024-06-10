import "./styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoryPreview from "../categories-preview";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
    </Routes>
  );
}
