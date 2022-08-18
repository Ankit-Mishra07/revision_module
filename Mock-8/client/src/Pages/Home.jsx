import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLocal } from "../utils/localUtil";

const Home = () => {
  const navigate = useNavigate();
  const { userInfo, success, error } = useSelector(
    (state) => state.registerState
  );
  const [user, setUser] = useState();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      setUser(userInfo);
    }
  }, []);
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Heading fontSize="xl" marginBottom={20} textAlign="center">
        My Profile
      </Heading>
      <Box
        width={"50%"}
        style={{
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          padding: 20,
          boxSizing: "border-box",
        }}
      >
        <Box>Name : {user?.name}</Box>
        <Box>Mobile no. : {user?.mobile}</Box>
        <Box>Username : {user?.username}</Box>
        <Box>Email : {user?.email}</Box>
        <Box>Description : {user?.description}</Box>
      </Box>
    </Box>
  );
};

export default Home;
