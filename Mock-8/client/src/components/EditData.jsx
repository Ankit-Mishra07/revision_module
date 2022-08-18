import { Box, Button, Input, Select, Stack, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const EditData = ({ handleUpdate }) => {
  let [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    mobile: "",
    image: "",
    department: "",
    salary: "",
  });

  const { id } = useParams();
  const handleChange = (e) => {
    let { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const fetchByID = () => {
    fetch(`https://m5r3server.herokuapp.com/api/employee/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setForm({
          name: res.name,
          age: res.age,
          gender: res.gender,
          mobile: res.mobile,
          image: res.image,
          department: res.department,
          salary: res.salary,
        });
      });
  };
  useEffect(() => {
    fetchByID();
  }, []);

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
        <h1 style={{ textAlign: "center", fontSize: "20px" }}>
          Add New Employee
        </h1>
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
            placeholder="Enter age"
            name="age"
            value={form.age}
            onChange={(e) => handleChange(e)}
          />
          <Select
            variant="flushed"
            placeholder="Enter Gender"
            name="gender"
            value={form.gender}
            onChange={(e) => handleChange(e)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </Select>
          <Input
            variant="flushed"
            placeholder="Enter Mobile number"
            name="mobile"
            value={form.mobile}
            onChange={(e) => handleChange(e)}
          />
          <Input
            variant="flushed"
            placeholder="Enter image url"
            name="image"
            value={form.image}
            onChange={(e) => handleChange(e)}
          />
          <Input
            variant="flushed"
            placeholder="Enter department"
            name="department"
            value={form.department}
            onChange={(e) => handleChange(e)}
          />
          <Input
            variant="flushed"
            placeholder="Enter salary"
            name="salary"
            value={form.salary}
            onChange={(e) => handleChange(e)}
          />
        </Stack>
        <Box display={"flex"} justifyContent="space-between" marginTop={10}>
          <Button colorScheme="linkedin" onClick={() => handleUpdate(id, form)}>
            Update
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditData;
