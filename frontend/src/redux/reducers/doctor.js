import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  doctors: [],
  singleDoctor: null,
  message:null,
};

const doctorReducer = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    UpdateDoctorRequest: (state) => {
      state.loading = true;
    },
    UpdateDoctorSuccess: (state, action) => {
      state.loading = false;
      state.message=action.payload;
    
    },
    UpdateDoctorFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    DeleteDoctorRequest: (state) => {
      state.loading = true;
    },
    DeleteDoctorSuccess: (state,action) => {
      state.loading = false;
      state.message=action.payload;
        
    },
    DeleteDoctorFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    GetSingleDoctorRequest: (state) => {
      state.loading = true;
    },
    GetSingleDoctorSuccess: (state, action) => {
      state.loading = false;
      state.singleDoctor = action.payload;
      state.error = null;
    },
    GetSingleDoctorFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    GetAllDoctorsRequest: (state) => {
      state.loading = true;
    },
    GetAllDoctorsSuccess: (state, action) => {
      state.loading = false;
      state.doctors = action.payload;
      state.error = null;
    },
    GetAllDoctorsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    removeDoctorError: (state) => {
      state.error = null;
    },
    removeDoctorMessage: (state) => {
        state.message = null;
      },
  },
});

export const {
  UpdateDoctorRequest,
  UpdateDoctorSuccess,
  UpdateDoctorFailure,
  DeleteDoctorRequest,
  DeleteDoctorSuccess,
  DeleteDoctorFailure,
  GetSingleDoctorRequest,
  GetSingleDoctorSuccess,
  GetSingleDoctorFailure,
  GetAllDoctorsRequest,
  GetAllDoctorsSuccess,
  GetAllDoctorsFailure,
  removeDoctorError,
} = doctorReducer.actions;

export default doctorReducer;
