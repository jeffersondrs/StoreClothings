import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cartSlice) => cartSlice.cartItems
);

export const selectIsOpen = createSelector(
  [selectCart],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
  }
);
