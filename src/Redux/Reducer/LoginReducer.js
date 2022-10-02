import {
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
} from "../Action/actionTypes"

const initialState = {
  loading: false,
  login: [],
  error: "",
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_LOGIN_SUCCESS:
      return {
        loading: false,
        login: action.payload,
        error: "",
      }
    case FETCH_LOGIN_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      }

    default:
      return state
  }
}
export default loginReducer
