import Home from "../routes/home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/crownJSX" element={<Home />} />
    </Routes>
  );
}
