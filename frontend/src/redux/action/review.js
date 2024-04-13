import axios from "axios";
import store from "../store";
import {
  CreateReviewRequest,
  CreateReviewSuccess,
  CreateReviewFailure,
  GetAllReviewsRequest,
  GetAllReviewsSuccess,
  GetAllReviewsFailure,
} from "../reducers/review";

const URL = 'http://localhost:8000';

export const createReview = async (reviewData) => {
  try {
    store.dispatch(CreateReviewRequest());

    const { data } = await axios.post(
      `${URL}/reviews`,
      reviewData,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      }
    );

    store.dispatch(CreateReviewSuccess(data));
  } catch (error) {
    store.dispatch(CreateReviewFailure(error.response.data.message));
  }
};

export const getAllReviews = async () => {
  try {
    store.dispatch(GetAllReviewsRequest());

    const { data } = await axios.get(`${URL}/reviews`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });

    store.dispatch(GetAllReviewsSuccess(data));
  } catch (error) {
    store.dispatch(GetAllReviewsFailure(error.response.data.message));
  }
};
