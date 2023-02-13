import { useSelector, useDispatch } from "react-redux";

import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

import {
  ShoppingIcon,
  CartIconCointainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

export const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItemsCounter = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconCointainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartItemsCounter}</ItemCount>
    </CartIconCointainer>
  );
};
