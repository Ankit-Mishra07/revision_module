import React from "react";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = ({ handleSubmit }) => {
  let [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
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
        <h1 style={{ textAlign: "center", fontSize: "20px" }}>Register</h1>
        <Stack spacing={3}>
          <Input
            variant="flushed"
            placeholder="Enter name"
            name="name"
            value={form.name}
            onChange={(e) => handleChange(e)}
          />
          <Input
            variant="flushed"
            placeholder="Enter email"
            name="email"
            value={form.email}
            onChange={(e) => handleChange(e)}
          />
          <Input
            variant="flushed"
            placeholder="Enter Password"
            name="password"
            value={form.password}
            onChange={(e) => handleChange(e)}
          />
          <Input
            variant="flushed"
            placeholder="Enter username"
            name="username"
            value={form.username}
            onChange={(e) => handleChange(e)}
          />
          <Input
            variant="flushed"
            placeholder="Enter mobile number"
            name="mobile"
            value={form.mobile}
            onChange={(e) => handleChange(e)}
          />
          <Input
            variant="flushed"
            placeholder="Enter description"
            name="description"
            value={form.description}
            onChange={(e) => handleChange(e)}
          />
        </Stack>
        <Box display={"flex"} justifyContent="space-between" padding={10}>
          <Text>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "blue" }}>
              Login
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

export default Register;
