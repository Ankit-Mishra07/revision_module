import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocal } from "../utils/localUtil";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getLocal("mockUser")) {
      navigate("/login");
    }
  }, []);
  return <div>Home</div>;
};

export default Home;
