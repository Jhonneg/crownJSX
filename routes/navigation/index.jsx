import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./styles.jsx";
import logo from "../../src/assets/crown.svg";
import { CartContext } from "../../src/contexts/cart.context";
import { selectCurrentUser } from "../../src/store/user/user.selector.js";
import { signOutUser } from "../../src/utils/firebase/firebase.utils";
import CartIcon from "../../src/components/cart-icon";
import CardDropdown from "../../src/components/cart-dropdown";

export default function Navigation() {
  const currentUser = useSelector(selectCurrentUser);

  const { isCartOpen } = useContext(CartContext);
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
