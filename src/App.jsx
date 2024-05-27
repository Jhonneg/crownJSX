import Home from "../routes/home";
import { Routes, Route, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div>
        <h1>I am the navigation component</h1>
      </div>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/crownJSX" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
