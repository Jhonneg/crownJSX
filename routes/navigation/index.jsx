import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./styles.jsx";
import logo from "../../src/assets/crown.svg";
import { selectIsCartOpen } from "../../src/store/cart/cart.selector";
import { selectCurrentUser } from "../../src/store/user/user.selector";
import { signOutStart } from "../../src/store/user/user.action";
import CartIcon from "../../src/components/cart-icon";
import CardDropdown from "../../src/components/cart-dropdown";

export default function Navigation() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());

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
