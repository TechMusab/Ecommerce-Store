import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    // Event create actions
    .addCase('eventCreateRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('eventCreateSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.event = payload;
      state.success = true;
    })
    .addCase('eventCreateFail', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.success = false;
    })

    // Get all events of shop actions
    .addCase('getAlleventsShopRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAlleventsShopSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.events = payload;
    })
    .addCase('getAlleventsShopFailed', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })

    // Delete event actions
    .addCase('deleteeventRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('deleteeventSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
    })
    .addCase('deleteeventFailed', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })

    // Get all events actions
    .addCase('getAlleventsRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAlleventsSuccess', (state, { payload }) => {
      state.isLoading = false;
      state.allEvents = payload;
    })
    .addCase('getAlleventsFailed', (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })

    // Clear errors action
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
