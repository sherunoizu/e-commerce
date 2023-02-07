import { useSelector, useDispatch } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

export const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const cartItemsArray = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearCartItemHandler = () =>
    dispatch(clearItemFromCart(cartItemsArray, cartItem));
  const addItemhandler = () =>
    dispatch(addItemToCart(cartItemsArray, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItemsArray, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemhandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearCartItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
