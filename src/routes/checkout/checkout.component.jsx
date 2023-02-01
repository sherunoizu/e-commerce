import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { CheckoutItem } from "../../components";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";

export const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        const { id } = cartItem;

        return <CheckoutItem key={id} cartItem={cartItem} />;
      })}

      <Total>Total Price: {cartTotalPrice}</Total>
    </CheckoutContainer>
  );
};
