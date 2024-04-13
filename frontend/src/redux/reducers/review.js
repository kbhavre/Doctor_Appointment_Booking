import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  reviews: [],
  singleReview: null,
  message:null,
};

const reviewReducer = createSlice({
  name: 'review',
  initialState,
  reducers: {
    CreateReviewRequest: (state) => {
      state.loading = true;
    },
    CreateReviewSuccess: (state, action) => {
      state.loading = false;
      state.message=action.payload;
    },
    CreateReviewFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    GetAllReviewsRequest: (state) => {
      state.loading = true;
    },
    GetAllReviewsSuccess: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
      state.error = null;
    },
    GetAllReviewsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    removeReviewError: (state) => {
      state.error = null;
    },
    removeReviewMessae: (state) => {
        state.message = null;
      },
  },
});

export const {
  CreateReviewRequest,
  CreateReviewSuccess,
  CreateReviewFailure,
  GetAllReviewsRequest,
  GetAllReviewsSuccess,
  GetAllReviewsFailure,
  removeReviewError,
} = reviewReducer.actions;

export default reviewReducer;
