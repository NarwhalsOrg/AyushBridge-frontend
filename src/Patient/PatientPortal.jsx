import React, { useEffect, useState } from "react";
import "./PatientPortal.css";

const PatientPortal = () => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("patientData");
    if (data) {
      setPatient(JSON.parse(data));
    }
  }, []);

  if (!patient) {
    return <h2 style={{ textAlign: "center" }}>No Patient Data Found</h2>;
  }

  return (
    <div className="portal-page">
      {/* Orange Navbar */}
      <div className="portal-navbar">
        Patient Portal
      </div>

      <div className="portal-container">
        {/* Left Profile Card */}
        <div className="profile-card">
          <img src={patient.image} alt="Patient" />
          <h3>{patient.name}</h3>
          <p><strong>ABHA ID</strong></p>
          <p>{patient.healthId}</p>
        </div>

        {/* Right Details Section */}
        <div className="details-card">
          <h2>Patient Details</h2>

          <div className="detail-row">
            <span>Age</span>
            <span>{patient.age}</span>
          </div>

          <div className="detail-row">
            <span>Gender</span>
            <span>{patient.gender}</span>
          </div>

          <div className="detail-row">
            <span>Blood Group</span>
            <span>{patient.blood}</span>
          </div>

          <div className="detail-row">
            <span>Address</span>
            <span>{patient.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;
