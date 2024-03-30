
import axios from "axios";
import store from "../store";

const URL='http://localhost:8000';



export const loginUser = async(email, password) => {


  try {
    store.dispatch( LoginRequest() );

    const { data } = await axios.post(
      `${URL}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("token", data.token)
    store.dispatch( LoginSuccess( data.user));
    
  } catch (error) {
    store.dispatch(LoginFailure(error.response.data.message));
  }
 
};





export const loadUser =async() => {
  

  try {
    store.dispatch(LoadUserRequest());
  

    const { data } = await axios.get(`${URL}/loaduser`, 
      { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} }
    );

    store.dispatch( LoadUserSuccess(data.user));
  
  } catch (error) {
    store.dispatch(LoadUserFailure(error.response.data.message));
  }
};



export const logoutUser = async()=> {


    try {
      store.dispatch(LogoutUserRequest());
     
      // await axios.get(`${URL}/api/v1/logout`, 
      // { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} });
     await localStorage.removeItem("token");
  
      store.dispatch(LogoutUserSuccess());
    } catch (error) {
      console.log(error);
      store.dispatch(LogoutUserFailure(error.response.data.message))
    }
   
  };
  
  
  
  
  export const registerUser =
    async(email, password, name, role, photo, gender)=> {
  
      try {
        store.dispatch(RegisterRequest());
  
        const { data } = await axios.post(
          `${URL}/api/v1/register`,
          {email, password, name, role, photo, gender},
          {
            headers: {
              "Content-Type": "application/json", 
            },
          }
        );
        localStorage.setItem("token", data.token);
  
        store.dispatch(RegisterSuccess(data.user))
      } catch (error) {
        console.log(error);
    
        store.dispatch(RegisterFailure(error.response.data.message));
      }
      
    };
  
  