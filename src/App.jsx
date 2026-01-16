import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import PatientLogin from "./Patient/PatientLogin";
import PatientRegister from "./Patient/PatientRegister";
import ClinicianLogin from "./Clinician/ClinicianLogin";
import InsuranceLogin from "./InsuranceCompany/InsuranceLogin";
import PatientPortal from "./Patient/PatientPortal";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patient/register" element={<PatientRegister />} />
      <Route path="/patient/login" element={<PatientLogin />} />
      <Route path="/patient/portal" element={<PatientPortal />} />
      <Route path="/clinician/login" element={<ClinicianLogin />} />
      <Route path="/insurance/login" element={<InsuranceLogin />} />
    </Routes>
  );
};

export default App;
