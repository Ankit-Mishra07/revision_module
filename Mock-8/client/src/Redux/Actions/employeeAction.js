import {
  EMPLOYEE_FAIL_DATA,
  EMPLOYEE_REQUEST_DATA,
  EMPLOYEE_SUCCESS_DATA,
} from "../Contants/employeeContants";

export const requestEmployeeData = () => {
  return {
    type: EMPLOYEE_REQUEST_DATA,
  };
};
export const successEmployeeData = (payload) => {
  return {
    type: EMPLOYEE_SUCCESS_DATA,
    payload,
  };
};
export const failEmployeeData = () => {
  return {
    type: EMPLOYEE_FAIL_DATA,
  };
};
