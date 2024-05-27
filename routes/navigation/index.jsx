import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import logo from "../../src/assets/crown.svg";
export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/crownJSX">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="signin">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
