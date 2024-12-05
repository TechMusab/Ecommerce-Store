import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  adminOrderLoading: false,
};

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    // Get all orders of user
    .addCase('getAllOrdersUserRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllOrdersUserSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.orders = payload;
    })
    .addCase('getAllOrdersUserFailed', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    
    // Get all orders of shop
    .addCase('getAllOrdersShopRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllOrdersShopSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.orders = payload;
    })
    .addCase('getAllOrdersShopFailed', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    
    // Get all orders for admin
    .addCase('adminAllOrdersRequest', (state) => {
      state.adminOrderLoading = true;
    })
    .addCase('adminAllOrdersSuccess', (state, { payload }) => {
      state.adminOrderLoading = false;
      state.adminOrders = payload;
    })
    .addCase('adminAllOrdersFailed', (state, { payload }) => {
      state.adminOrderLoading = false;
      state.error = payload;
    })
    
    // Clear errors
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
