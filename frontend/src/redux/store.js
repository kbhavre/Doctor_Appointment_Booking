import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import doctorReducer from "./reducers/doctor";
import reviewReducer from "./reducers/review";
const store = configureStore({
  reducer: {
    user: userReducer.reducer,
    doctor: doctorReducer.reducer,
    review: reviewReducer.reducer,

  },
});

export default store;
