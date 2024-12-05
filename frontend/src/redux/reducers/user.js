import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    // Load user actions
    .addCase('LoadUserRequest', (state) => {
      state.loading = true;
    })
    .addCase('LoadUserSuccess', (state, { payload }) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = payload;
    })
    .addCase('LoadUserFail', (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.isAuthenticated = false;
    })

    // Update user information actions
    .addCase('updateUserInfoRequest', (state) => {
      state.loading = true;
    })
    .addCase('updateUserInfoSuccess', (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    })
    .addCase('updateUserInfoFailed', (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    })

    // Update user address actions
    .addCase('updateUserAddressRequest', (state) => {
      state.addressloading = true;
    })
    .addCase('updateUserAddressSuccess', (state, { payload }) => {
      state.addressloading = false;
      state.successMessage = payload.successMessage;
      state.user = payload.user;
    })
    .addCase('updateUserAddressFailed', (state, { payload }) => {
      state.addressloading = false;
      state.error = payload;
    })

    // Delete user address actions
    .addCase('deleteUserAddressRequest', (state) => {
      state.addressloading = true;
    })
    .addCase('deleteUserAddressSuccess', (state, { payload }) => {
      state.addressloading = false;
      state.successMessage = payload.successMessage;
      state.user = payload.user;
    })
    .addCase('deleteUserAddressFailed', (state, { payload }) => {
      state.addressloading = false;
      state.error = payload;
    })

    // Get all users actions (admin)
    .addCase('getAllUsersRequest', (state) => {
      state.usersLoading = true;
    })
    .addCase('getAllUsersSuccess', (state, { payload }) => {
      state.usersLoading = false;
      state.users = payload;
    })
    .addCase('getAllUsersFailed', (state, { payload }) => {
      state.usersLoading = false;
      state.error = payload;
    })

    // Clear errors
    .addCase('clearErrors', (state) => {
      state.error = null;
    })

    // Clear success messages
    .addCase('clearMessages', (state) => {
      state.successMessage = null;
    });
});
