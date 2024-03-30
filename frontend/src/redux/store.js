import { configureStore } from "@reduxjs/toolkit";
import { 
  userReducer,
  doctorReducer,
  reviewReducer,
} from "./reducers"; 

const store = configureStore({
  reducer: {
    user: userReducer,
    doctor: doctorReducer,
    review: reviewReducer,

  },
});

export default store;
