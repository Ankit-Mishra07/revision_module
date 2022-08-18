import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Login from "../components/Login";
import { registerSuccess } from "../Redux/Actions/userAction";

const LoginPage = () => {
  const { userInfo, success, error } = useSelector(
    (state) => state.registerState
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  });

  const handleSubmit = (payload) => {
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error === false) {
          FetchUser(res.token, payload.username);
        } else {
          toast("wrong credential");
        }
      });
  };
  const FetchUser = async (token, username) => {
    await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          toast(res.message);
        } else {
          dispatch(registerSuccess(res));
          navigate("/");
          toast("Logged in successfully");
        }
      })
      .catch((error) => {
        toast("Something went wrong");
      });
  };

  return (
    <>
      <Login handleSubmit={handleSubmit} />
    </>
  );
};

export default LoginPage;
