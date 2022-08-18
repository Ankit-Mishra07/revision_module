import { Box, Tab, TabList } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Register from "./Register";

const Navbar = () => {
  const { userInfo, success, error } = useSelector(
    (state) => state.registerState
  );
  return (
    <>
      <Box
        bg="blue.500"
        display={"flex"}
        justifyContent="space-between"
        w="100%"
        p={4}
        alignItems="center"
        color="white"
      >
        <Box display={"flex"} gap="10px">
          <Link to="/">Home</Link>
          <Link to="/employees">Employees</Link>
        </Box>
        <Box display={"flex"} gap="10px">
          {userInfo ? (
            <Link to="/login">Logout</Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
