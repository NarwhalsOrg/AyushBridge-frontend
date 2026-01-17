import { useState } from "react";
import "./DoctorDashboard.css";

const ClinicianDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [diagnosisList, setDiagnosisList] = useState([]);

  const [formData, setFormData] = useState({
    patientName: "",
    date: "",
    disease: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.patientName || !formData.date || !formData.disease) {
      alert("Please fill all fields");
      return;
    }

    setDiagnosisList([...diagnosisList, formData]);

    setFormData({ patientName: "", date: "", disease: "" });
    setShowForm(false);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="top-bar"></div>

      {/* Hospital Name */}
      <h2 className="hospital-name">
        Hospital : <span>SRM Ayurveda Hospital</span>
      </h2>

      {/* Doctor Details */}
      <div className="doctor-card">
        <div className="doctor-info">
          <h3>Doctor Details :</h3>
          <div className="info-grid">
            <p><b>Name :</b> Kunal Meshram</p>
            <p><b>Qualification :</b> BAMS, MS (Ayurveda)</p>
            <p><b>Gender :</b> <span className="link">Male</span></p>
            <p><b>Specialization :</b> <span className="link">Shalya Tantra</span></p>
            <p><b>Age :</b> 20</p>
            <p><b>Address :</b> K.K. Nagar, Chennai</p>
          </div>
        </div>

        <div className="doctor-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Doctor"
          />
        </div>
      </div>

      {/* Diagnosis Section */}
      <div className="diagnosis-section">
        <div className="diagnosis-header">
          <h3>Diagnosis List :</h3>

          <button className="add-btn" onClick={() => setShowForm(true)}>
            + Add Diagnosis
          </button>
        </div>

        {/* Table */}
        <table className="diagnosis-table">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Disease Description</th>
            </tr>
          </thead>
          <tbody>
            {diagnosisList.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty-row">No records found</td>
              </tr>
            ) : (
              diagnosisList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.patientName}</td>
                  <td>{item.date}</td>
                  <td>{item.disease}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Diagnosis Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add Diagnosis</h3>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="patientName"
                placeholder="Patient Name"
                value={formData.patientName}
                onChange={handleChange}
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <textarea
                name="disease"
                placeholder="Disease Description"
                value={formData.disease}
                onChange={handleChange}
              />

              <div className="modal-actions">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClinicianDashboard;
