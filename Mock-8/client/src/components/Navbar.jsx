import { Box, Button, Tab, TabList } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Actions/userAction";
import Register from "./Register";

const Navbar = () => {
  const { userInfo, success, error } = useSelector(
    (state) => state.registerState
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
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
            <Button bg="red.300" onClick={handleLogout}>
              Logout
            </Button>
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
