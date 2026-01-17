import React from 'react'
import './HomePage.css'
import NavbarHome from '../NavigationBar/NavbarHome.jsx'
import heroImg from '../assets/hero-img.png'
import impactImage from '../assets/impact-image.png'
import { MdCopyright } from "react-icons/md";
import Logo from '../assets/Logo.png';


const HomePage = () => {
  return (
    <div className="home-page">
      <div className='home-navbar'>
        <NavbarHome />
      </div>

      {/* MAIN CONTENT */}
      <div className="home-content">
        <div className='hero-section'>
          <div className='hero-content'>
            <h1>Welcome to AyushBridge</h1>
            <p>
              <span className="hero-content-highlight">Ayush Bridge</span> is a digital initiative designed to seamlessly connect traditional 
              <span className="hero-content-highlight"> AYUSH </span>
              medical systems with modern global 
              <span className="hero-content-highlight"> healthcare </span>
              standards. Our platform acts as a unified bridge between 
              <span className="hero-content-highlight"> ICD-11 </span>
              codes and 
              <span className="hero-content-highlight"> NAMASTE </span>
              (National AYUSH Morbidity and Standardized Terminologies Electronic) codes, enabling standardized, interoperable, and data-driven healthcare documentation.
              <br /><br />
              The goal of 
              <span className="hero-content-highlight"> Ayush Bridge </span>
              is to simplify 
              <span className="hero-content-highlight"> clinical coding</span>, enhance 
              <span className="hero-content-highlight"> disease classification</span>, and promote global recognition of AYUSH practices by aligning them with internationally accepted health informatics frameworks. By integrating 
              <span className="hero-content-highlight"> ICD-11 </span>
              with  
              <span className="hero-content-highlight"> NAMASTE </span>
              codes, we empower healthcare professionals, researchers, institutions, and policymakers to record, analyze, and exchange AYUSH-related 
              <span className="hero-content-highlight"> health data </span>
              with greater accuracy and consistency.
            </p>
          </div>

          <div className='hero-image'>
            <img src={heroImg} alt="Hero" />
          </div>
        </div>
      </div>



      {/* What We Do (Services) */}
      <div className='services'>
        <h2>What We Do ?</h2> <br />
        <div className='services-cards'>
        <div className='service-card service-item-1'>
        <span className="hero-content-highlight">ICD-11 & NAMASTE Integration:</span> <br /> Map and link AYUSH terminologies with ICD-11 for standardized diagnosis and reporting.
        </div>

        <div className='service-card service-item-2'>
          <span className="hero-content-highlight">Digital Interoperability:</span><br /> Enable seamless data exchange between traditional medicine systems and modern healthcare platforms. 
        </div>
          
        <div className="service-card service-item-3">
          <span className="hero-content-highlight">Clinical & Research Support:</span> <br /> Assist practitioners and researchers with structured coding for better analytics, studies, and outcomes.
        </div>
        <div className="service-card service-item-4">
          <span className="hero-content-highlight">Policy & Public Health Enablement:</span> <br /> Support evidence-based decision-making through reliable and comparable health data.
        </div>
        </div>
      </div>

      {/* Impact */}

      <div className='impact-section'>
        <h2>Impact: </h2>
        <div className='impact-card'>
          <div className='impact-image'>
            <img src={impactImage} alt="Impact" />
          </div>
          <div className='impact-content'>
            <p>Traditional systems like Ayurveda, Yoga, Unani, Siddha, and Homeopathy play a vital role in holistic healthcare, yet often face challenges in global data representation. Ayush Bridge addresses this gap by ensuring AYUSH practices that are: 

              <ul>
                <li>Digitally standardized</li>
                <li>Internationally compatible</li>
                <li>Scientifically documented</li>
                <li>Future-ready for health informatics and AI-driven </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='home-footer'>
        <div className='footer-content'>
          <div className='footer-logo'>
            <img src={Logo} alt="AyushBridge Logo" />
          </div>
        </div>
        <div className='footer-copyright'>
          Powered by AyushBridge <MdCopyright />
        </div>

      </div>
    </div>
  )
}

export default HomePage