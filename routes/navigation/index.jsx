import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./styles.jsx";
import logo from "../../src/assets/crown.svg";
import { selectIsCartOpen } from "../../src/store/cart/cart.selector.js";
import { selectCurrentUser } from "../../src/store/user/user.selector.js";
import { signOutUser } from "../../src/utils/firebase/firebase.utils";
import CartIcon from "../../src/components/cart-icon";
import CardDropdown from "../../src/components/cart-dropdown";

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={logo} alt="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}
