import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    // Product create actions
    .addCase('productCreateRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('productCreateSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.product = payload;
      state.success = true;
    })
    .addCase('productCreateFail', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.success = false;
    })

    // Get all products of shop
    .addCase('getAllProductsShopRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllProductsShopSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    })
    .addCase('getAllProductsShopFailed', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })

    // Delete product actions
    .addCase('deleteProductRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('deleteProductSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
    })
    .addCase('deleteProductFailed', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })

    // Get all products actions
    .addCase('getAllProductsRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllProductsSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.allProducts = payload;
    })
    .addCase('getAllProductsFailed', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })

    // Clear errors
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
