import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
        <h1 className="home-title">Welcome to AyushBridge</h1>
      <div className="box-container">
        <div
          className="role-box"
          onClick={() => navigate("/patient/login")}
        >
          Patient
        </div>

        <div
          className="role-box"
          onClick={() => navigate("/clinician/login")}
        >
          Clinician
        </div>

        <div
          className="role-box"
          onClick={() => navigate("/insurance/login")}
        >
          Insurance Company
        </div>
      </div>
    </div>
  );
};

export default HomePage;
