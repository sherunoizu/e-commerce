import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/114 shopping-bag.svg";

import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemsCounter } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCounter}</span>
    </div>
  );
};
