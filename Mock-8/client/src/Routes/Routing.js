import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateEmployee from "../Pages/CreateEmployee";
import EmployeePage from "../Pages/EmployeePage";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import SingleEmployee from "../Pages/SingleEmployee";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/employees" element={<EmployeePage />}></Route>
        <Route path="/employees/create" element={<CreateEmployee />}></Route>
        <Route path="/employees/:id" element={<SingleEmployee />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
