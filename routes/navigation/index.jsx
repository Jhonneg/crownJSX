import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import "./navigation.styles.scss";
import logo from "../../src/assets/crown.svg";
import { UserContext } from "../../src/contexts/user.context";
import { signOutUser } from "../../src/utils/firebase/firebase.utils";

export default function Navigation() {
  
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <span onClick={signOutHandler} className="nav-link">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
