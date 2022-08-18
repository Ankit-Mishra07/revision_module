import { getLocal, setLocal } from "../../utils/localUtil";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
} from "../Contants/userContants";
const init = {
  userInfo: getLocal("mockUser") || null,
};
export const registerReducer = (state = init, { type, payload }) => {
  switch (type) {
    case USER_REGISTER_SUCCESS:
      setLocal("mockUser", payload);
      return {
        userInfo: payload,
        success: true,
        error: false,
      };
    case USER_REGISTER_FAIL:
      return {
        error: true,
        success: false,
      };
    default:
      return state;
  }
};
