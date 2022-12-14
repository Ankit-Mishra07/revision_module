import {
  LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from "../Contants/userContants";

export const registerSuccess = (payload) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload,
  };
};

export const registerFail = () => {
  return {
    type: USER_REGISTER_FAIL,
  };
};

export const logout = () => {
  localStorage.removeItem("mockUser");
  return {
    type: LOGOUT,
  };
};
