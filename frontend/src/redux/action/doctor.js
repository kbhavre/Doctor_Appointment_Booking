import axios from "axios";
import store from "../store";
import {
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
  GetAllDoctorsFailure
} from "../reducers/doctor";
  
const URL = 'http://localhost:8000';





export const updateDoctor = async (doctorData,doctorId) => {
  try {
    store.dispatch(UpdateDoctorRequest());


    const { data } = await axios.put(
        `${URL}/${doctorId}`,
        doctorData,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

    store.dispatch(UpdateDoctorSuccess(data));
  } catch (error) {
    store.dispatch(UpdateDoctorFailure(error.response.data.message));
  }
};





export const deleteDoctor = async (doctorId) => {
  try {
    store.dispatch(DeleteDoctorRequest());

 const {data}=  await axios.delete(`${URL}/doctors/${doctorId}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });

    store.dispatch(DeleteDoctorSuccess(data));
  } catch (error) {
    store.dispatch(DeleteDoctorFailure(error.response.data.message));
  }
};

export const getSingleDoctor = async (doctorId) => {
  try {
    store.dispatch(GetSingleDoctorRequest());

    const { data } = await axios.get(`${URL}/doctors/${doctorId}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });

    store.dispatch(GetSingleDoctorSuccess(data));
  } catch (error) {
    store.dispatch(GetSingleDoctorFailure(error.response.data.message));
  }
};

export const getAllDoctors = async (input) => {
  try {
    store.dispatch(GetAllDoctorsRequest());

    const { data } = await axios.get(`${URL}/doctors`, {
      params: input,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });

    store.dispatch(GetAllDoctorsSuccess(data));
  } catch (error) {
    store.dispatch(GetAllDoctorsFailure(error.response.data.message));
  }
};
