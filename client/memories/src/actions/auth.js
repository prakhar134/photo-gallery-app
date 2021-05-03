import * as api from "../api";
import { AUTH } from "../constants/actionTypes";
import toastifier from 'toastifier';
import 'toastifier/dist/toastifier.min.css';

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.user_signin(formData);
    console.log(data)
    dispatch({ type: AUTH, data: data });
    toastifier("Logged in successfully", {animation: "zoom"})
    history.push("/");
  } catch (error) {
    console.log(error);
    toastifier("Invalid credentials. Please try again.",{
      type: "error",
      showIcon: false,
      animation: "zoom",
    })
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
      console.log(formData)
    const { data } = await api.user_signup(formData);
    dispatch({ type: AUTH, data: data });
    toastifier("Signed up successfully", {animation: "zoom"})
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
