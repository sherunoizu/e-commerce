import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  ShoppingIcon,
  CartIconCointainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemsCounter } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconCointainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartItemsCounter}</ItemCount>
    </CartIconCointainer>
  );
};
