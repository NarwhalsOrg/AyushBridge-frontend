import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import PatientLogin from "./Patient/PatientLogin";
import PatientRegister from "./Patient/PatientRegister";
import DoctorLogin from "./Doctor/DoctorLogin";
import DoctorDashboard from "./Doctor/DoctorDashboard";
import InsuranceLogin from "./InsuranceCompany/InsuranceLogin";
import PatientPortal from "./Patient/PatientPortal";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patient/register" element={<PatientRegister />} />
      <Route path="/patient/login" element={<PatientLogin />} />
      <Route path="/patient/portal" element={<PatientPortal />} />
      <Route path="/doctor/login" element={<DoctorLogin />} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/insurance/login" element={<InsuranceLogin />} />
    </Routes>
  );
};

export default App;
