import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isSeller: false,
};

export const sellerReducer = createReducer(initialState, (builder) => {
  builder
    // Load seller actions
    .addCase('LoadSellerRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('LoadSellerSuccess', (state, { payload }) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = payload;
    })
    .addCase('LoadSellerFail', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.isSeller = false;
    })

    // Get all sellers actions (admin)
    .addCase('getAllSellersRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllSellersSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.sellers = payload;
    })
    .addCase('getAllSellerFailed', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })

    // Clear errors
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
