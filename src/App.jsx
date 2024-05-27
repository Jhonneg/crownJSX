import Home from "../routes/home";
import Navigation from "../routes/navigation";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/crownJSX" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
