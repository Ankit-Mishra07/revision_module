import { Box } from "@chakra-ui/layout";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";

const EmployeePage = () => {
  const [data, setData] = useState([]);
  const { userInfo, success, error } = useSelector(
    (state) => state.registerState
  );
  const navigate = useNavigate();
  const fetchEmployees = async () => {
    let res = await fetch("https://m5r3server.herokuapp.com/api/employee");
    let data = await res.json();
    setData(data);
  };
  useEffect(() => {
    if (userInfo) {
      fetchEmployees();
    } else {
      navigate("/login");
    }
  }, []);

  const handleDelete = (id) => {
    fetch(`https://m5r3server.herokuapp.com/api/employee/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        fetchEmployees();
        toast("Deleted Successfully");
      })
      .catch((error) => {
        toast("Something went wrong");
      });
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "30px",
      }}
    >
      <Button>
        <Link to="/employees/create">Add New Employee</Link>
      </Button>
      {data?.map((property) => (
        <Box
          borderWidth="1px"
          borderRadius="lg"
          display="flex"
          style={{ width: "100%" }}
          key={property.id}
        >
          <EmployeeCard property={property} handleDelete={handleDelete} />
        </Box>
      ))}
    </Box>
  );
};

export default EmployeePage;
