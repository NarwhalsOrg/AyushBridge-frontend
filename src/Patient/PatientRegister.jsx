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

  const [abhaError, setAbhaError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ABHA validation
    if (name === "healthId") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 14) return;

      if (value.length !== 14) {
        setAbhaError("ABHA ID must be exactly 14 digits");
        setOtpSent(false);
        setIsVerified(false);
      } else {
        setAbhaError("");
      }
    }

    setForm({ ...form, [name]: value });
  };

  // Image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Mock OTP send
  const sendOtp = () => {
    if (form.healthId.length !== 14) {
      alert("Enter valid 14-digit ABHA ID");
      return;
    }
    setOtpSent(true);
    alert("OTP sent to registered mobile (mock)");
  };

  // Mock OTP verify
  const verifyOtp = () => {
    if (otp.length !== 6) {
      alert("OTP must be 6 digits");
      return;
    }
    setIsVerified(true);
    alert("ABHA ID Verified (mock)");
  };

  const handleRegister = () => {
    if (Object.values(form).some((v) => v === "")) {
      alert("Please fill all fields");
      return;
    }

    if (!isVerified) {
      alert("Please verify ABHA ID before registering");
      return;
    }

    localStorage.setItem("patientData", JSON.stringify(form));
    alert("Registration successful");
    navigate("/patient/login");
  };

  return (
    <div className="login-page">
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
        <input name="age" placeholder="Age" onChange={handleChange} />
        <input name="gender" placeholder="Gender" onChange={handleChange} />
        <input name="blood" placeholder="Blood Group" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />

        {/* ABHA SECTION */}
        <div className="abha-section">
          <input
            name="healthId"
            placeholder="ABHA ID (14 digits)"
            value={form.healthId}
            onChange={handleChange}
            maxLength={14}
          />

          <button
            type="button"
            className="verify-btn"
            onClick={sendOtp}
            disabled={!!abhaError || isVerified}
          >
            {isVerified ? "Verified" : "Verify ABHA"}
          </button>
        </div>

        {abhaError && <p className="error-text">{abhaError}</p>}

        {otpSent && !isVerified && (
          <div className="otp-section">
            <input
              placeholder="Enter 6-digit OTP"
              value={otp}
              maxLength={6}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) setOtp(e.target.value);
              }}
            />
            <button type="button" onClick={verifyOtp}>
              Verify OTP
            </button>
          </div>
        )}

        {isVerified && (
          <p className="success-text">✔ ABHA Verified</p>
        )}

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
          <span onClick={() => navigate("/patient/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default PatientRegister;
