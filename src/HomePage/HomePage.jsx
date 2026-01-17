import React, { useEffect, useState } from "react";
import "./HomePage.css";
import NavbarHome from "../NavigationBar/NavbarHome.jsx";
import heroImg from "../assets/hero-img.png";
import impactImage from "../assets/impact-image.png";
import { MdCopyright } from "react-icons/md";

const HomePage = () => {
  /* ===== INTERACTIVE HERO TEXT ===== */
  const words = ["AYUSH", "ICD-11", "NAMASTE", "Healthcare"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <NavbarHome />

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Bridging <span className="animated-word">{words[wordIndex]}</span>
          </h1>

          <p>
            <span className="highlight">AyushBridge</span> is a digital platform
            that connects traditional <span className="highlight">AYUSH</span>{" "}
            medical systems with modern global{" "}
            <span className="highlight">healthcare</span> standards.
            <br />
            By integrating <span className="highlight">ICD-11</span> with{" "}
            <span className="highlight">NAMASTE</span> codes, AyushBridge enables
            standardized, interoperable, and data-driven healthcare
            documentation.
          </p>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="AyushBridge Hero" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>What We Do?</h2>

        <div className="services-cards">
          <div className="service-card">
            <h3>ICD-11 & NAMASTE Integration</h3>
            <p>Standardized diagnosis & reporting for AYUSH systems.</p>
          </div>

          <div className="service-card">
            <h3>Digital Interoperability</h3>
            <p>Seamless data exchange across healthcare platforms.</p>
          </div>

          <div className="service-card">
            <h3>Clinical & Research Support</h3>
            <p>Structured coding for analytics and research.</p>
          </div>

          <div className="service-card">
            <h3>Policy Enablement</h3>
            <p>Reliable data for public health decisions.</p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="impact-section">
        <h2 className="impact-title">Impact :</h2>

        <div className="impact-card">
          <div className="impact-image">
            <img src={impactImage} alt="Impact" />
          </div>

          <div className="impact-content">
            <p>Traditional systems like Ayurveda, Yoga, Unani, Siddha, and Homeopathy play a vital role in holistic healthcare, yet often face challenges in global data representation. Ayush Bridge addresses this gap by ensuring AYUSH practices that are:</p>
            <ul>
              <li>Digitally standardized</li>
              <li>Internationally compatible</li>
              <li>Scientifically documented</li>
              <li>Future-ready for AI & health informatics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="footer-copy">
          Powered by AyushBridge <MdCopyright />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
