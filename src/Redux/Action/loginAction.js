import axios from "axios"

import { baseUrl } from "../../config"
import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from "./actionTypes"

export const fetchloginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  }
}

export const fetchloginSuccess = (login) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: login,
  }
}

export const fetchloginFailure = (error) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error,
  }
}

export const fetchLoginData = (v) => {
  // return (dispatch, values) => {
    // dispatch(fetchloginRequest)
    axios
      .post(`${baseUrl}/login`, {
        headers: {
          authorization: "QpwL5tke4Pnpja7X4",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const login = response.data
        // dispatch(fetchloginSuccess(login))
      })
      .catch((error) => {
        const errorMsg = error.message
        // dispatch(fetchloginFailure(errorMsg))
      })
    // console.log("Success:", values)
  // }
}
