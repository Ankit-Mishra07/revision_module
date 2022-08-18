import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Register from "../components/Register";
import { setLocal } from "../utils/localUtil";

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (payload) => {
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error === false) {
          navigate("/login");
          toast("Registered Successfully");
          setLocal(payload);
        } else {
          toast("User already exists plese try with different data");
        }
      });
  };
  return (
    <>
      <Register handleSubmit={handleSubmit} />
    </>
  );
};

export default RegisterPage;
