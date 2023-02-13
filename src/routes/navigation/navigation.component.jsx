import { Fragment } from "react";
import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { CartIcon, CartDropdown } from "../../components";
import { ReactComponent as CrwnLogo } from "../../assets/086 crown.svg";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";


import { signOutStart } from "../../store/user/user.action";

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinksContainer,
} from "./navigation.styles.jsx";

export const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
