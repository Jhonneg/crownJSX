import Home from "../routes/home";
import Navigation from "../routes/navigation";
import { Routes, Route } from "react-router-dom";
import Signin from "../routes/signin";

function Shop() {
  return <div>Shop goes here</div>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
}
