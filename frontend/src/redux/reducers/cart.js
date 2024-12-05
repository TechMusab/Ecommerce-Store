import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cartItems", JSON.stringify(cart));
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('addToCart', (state, { payload }) => {
      const isItemExist = state.cart.find((item) => item._id === payload._id);

      if (isItemExist) {
        state.cart = state.cart.map((item) =>
          item._id === isItemExist._id ? { ...item, ...payload } : item
        );
      } else {
        state.cart.push(payload);
      }

      saveCartToLocalStorage(state.cart); // Persist to localStorage
    })
    .addCase('removeFromCart', (state, { payload }) => {
      state.cart = state.cart.filter((item) => item._id !== payload);
      saveCartToLocalStorage(state.cart); // Persist to localStorage
    });
});
