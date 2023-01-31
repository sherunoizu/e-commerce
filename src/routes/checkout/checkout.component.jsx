import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { CheckoutItem } from "../../components";

import "./checkout.styles.scss";

export const Checkout = () => {
  const { cartItems, cartTotalPrice } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        const { id } = cartItem;

        return <CheckoutItem key={id} cartItem={cartItem} />;
      })}

      <div className="total">Total Price: {cartTotalPrice}</div>
    </div>
  );
};
