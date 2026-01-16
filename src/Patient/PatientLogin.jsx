import React, { useState, useEffect } from "react";
import { FiEye, FiEyeOff, FiRefreshCw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./PatientLogin.css";

const PatientLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState("");

  const [abhaId, setAbhaId] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = () => {
    if (!abhaId || !password || !captchaInput) {
      alert("Please fill all fields");
      return;
    }

    if (captchaInput !== captcha) {
      alert("Captcha does not match");
      generateCaptcha();
      return;
    }

    // 🔐 Fetch registered patient data
    const storedPatient = JSON.parse(localStorage.getItem("patientData"));

    if (!storedPatient) {
      alert("No registered patient found. Please register first.");
      return;
    }

    if (
      storedPatient.healthId === abhaId &&
      storedPatient.password === password
    ) {
      navigate("/patient/portal", {
        state: {
          name: storedPatient.name,
          age: storedPatient.age,
          healthId: storedPatient.healthId,
          blood: storedPatient.blood,
          gender: storedPatient.gender,
          address: storedPatient.address,
          image: "https://via.placeholder.com/150"
        }
      });
    } else {
      alert("Invalid ABHA ID or Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login_nav"></div>

      <div className="login-container">
        <h2>Log In to your account</h2>

        <input
          type="text"
          placeholder="ABHA Id"
          value={abhaId}
          onChange={(e) => setAbhaId(e.target.value)}
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="eye" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <div className="forgot">
          <a href="#">forgot password ?</a>
        </div>

        <div className="captcha-row">
          <input
            type="text"
            placeholder="Enter the captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
          <div className="captcha-box">{captcha}</div>
        </div>

        <div className="captcha-reload" onClick={generateCaptcha}>
          <FiRefreshCw />
          <span> Reload</span>
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Log In With Password
        </button>

        <p className="register-text">
          Not registered with ABHA account?{" "}
          <span
            style={{ color: "#3f6fa9", cursor: "pointer" }}
            onClick={() => navigate("/patient/register")}
          >
            Register Now
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

export default PatientLogin;
