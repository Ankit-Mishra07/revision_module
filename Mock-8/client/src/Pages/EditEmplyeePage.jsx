import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import EditData from "../components/EditData";

const EditEmployeePage = () => {
  const navigate = useNavigate();

  const handleUpdate = (id, form) => {
    if (
      !form.name ||
      !form.age ||
      !form.gender ||
      !form.mobile ||
      !form.department ||
      !form.salary
    ) {
      toast("Please Fill all input feilds");
      return;
    }

    if (!form.image) {
      form.image =
        "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg";
    }

    fetch(`https://m5r3server.herokuapp.com/api/employee/${id}`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        toast("Employee data updated");
        navigate("/employees");
      })
      .catch((error) => {
        toast("Something went wrong, please try again!");
      });
  };
  return (
    <>
      <EditData handleUpdate={handleUpdate} />
    </>
  );
};

export default EditEmployeePage;
