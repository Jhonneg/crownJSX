import Spinner from "./components/spinner";
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./store/user/user.action";
import { GlobalStyle } from "./global.styles";

const Checkout = lazy(() => import("../routes/checkout"));
const Navigation = lazy(() => import("../routes/navigation"));
const Home = lazy(() => import("../routes/home"));
const Authentication = lazy(() => import("../routes/authentication"));
const Shop = lazy(() => import("../routes/shop"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
