import axios from "axios"
import baseApi from "../../baseApi"
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS,
} from "./actionTypes"

// export const getUsers = () => {
//   return {
//     type: FETCH_USERS,
//   }
// }

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}



export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest)
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        const errorMsg = error.message
        dispatch(fetchUsersFailure(errorMsg))
      })
  }
}
