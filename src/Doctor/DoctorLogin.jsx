import React, { useState, useEffect } from "react";
import { FiEye, FiEyeOff, FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./DoctorLogin.css";

const DoctorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState("");

  const [username, setUsername] = useState("");
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

  const handleLogin = (e) => {
    e.preventDefault();

    if (captchaInput !== captcha) {
      alert("Invalid captcha");
      generateCaptcha();
      setCaptchaInput("");
      return;
    }

    // TODO: API call here
    console.log("Doctor Login:", { username, password });
  };

  return (
    <div className="login-page">
      <div className="login_nav"></div>

      <div className="login-container">
        <h2>Log In to your account</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className="forgot">
            <Link to="/doctor/forgot-password">forgot password ?</Link>
          </div>

          <div className="captcha-row">
            <input
              type="text"
              placeholder="Enter the captcha"
              value={captchaInput}
              required
              onChange={(e) => setCaptchaInput(e.target.value)}
            />
            <div className="captcha-box">{captcha}</div>
          </div>

          <div className="captcha-reload" onClick={generateCaptcha}>
            <FiRefreshCw />
            <span> Reload</span>
          </div>

          <button type="submit" className="login-btn">
            Log In With Password
          </button>
        </form>

        <p className="register-text">
          Not registered with ABHA account?{" "}
          <a
            href="https://abha.abdm.gov.in/abha/v3/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a>
        </p>
      </div>

      <div className="login-footer">
        <p>
          © Content developed as part of <span>Code Kalari Hackathon</span>{" "}
          project.
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

export default DoctorLogin;
