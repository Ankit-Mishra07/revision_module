import React from "react";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = ({ handleSubmit }) => {
  let [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    let { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box width={"50%"}>
        <h1 style={{ textAlign: "center", fontSize: "20px" }}>Login</h1>
        <Stack spacing={3}>
          <Input
            variant="flushed"
            placeholder="Enter username"
            name="username"
            value={form.username}
            onChange={(e) => handleChange(e)}
          />
          <Input
            variant="flushed"
            placeholder="Enter Password"
            name="password"
            value={form.password}
            onChange={(e) => handleChange(e)}
          />
        </Stack>
        <Box display={"flex"} justifyContent="space-between" padding={10}>
          <Text>
            Create an account?{" "}
            <Link to="/register" style={{ color: "blue" }}>
              Register
            </Link>
          </Text>
          <Button colorScheme="linkedin" onClick={() => handleSubmit(form)}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
