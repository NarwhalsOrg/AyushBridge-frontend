import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientRegister.css";

const PatientRegister = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    healthId: "",
    age: "",
    gender: "",
    blood: "",
    address: "",
    password: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleRegister = () => {
    if (Object.values(form).some((v) => v === "")) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("patientData", JSON.stringify(form));
    alert("Registration successful");
    navigate("/patient/login");
  };

  return (
    <div className="login-page">
      <div className="login_nav"></div>

      <div className="login-container">
        <h2>Create Patient Account</h2>

        {/* Image Upload */}
        <div className="image-upload">
          <label htmlFor="image">
            {form.image ? (
              <img src={form.image} alt="Preview" />
            ) : (
              <div className="image-placeholder">Upload Image</div>
            )}
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
        </div>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="healthId" placeholder="ABHA ID" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <input name="gender" placeholder="Gender" onChange={handleChange} />
        <input name="blood" placeholder="Blood Group" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          onChange={handleChange}
        />

        <button className="login-btn" onClick={handleRegister}>
          Register
        </button>

        <p className="register-text">
          Already have an account?{" "}
          <span
            style={{ color: "#3f6fa9", cursor: "pointer" }}
            onClick={() => navigate("/patient/login")}
          >
            Login
          </span>
        </p>
      </div>

      <div className="login-footer">
        <p>
          © Content developed as part of{" "}
          <span>Code Kalari Hackathon</span> project.
        </p>
        <p>
          This platform is conceptualized and maintained by{" "}
          <span>Team Dev Code</span>.
        </p>
        <p>
          Designed and developed for problem statement:{" "}
          <span>
            “Integration of NAMASTE and ICD-11 via TM2 into EHR systems.”
          </span>
        </p>
        <p className="last-updated">Last Updated: 15/01/2026</p>
      </div>
    </div>
  );
};

export default PatientRegister;
