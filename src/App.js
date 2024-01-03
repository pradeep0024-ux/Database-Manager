import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Navbar from "./components/pages/navbar";
import Registration from "./components/pages/Registration";
import PersonalDetails from "./components/pages/PersonalDetails";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/pages/Footer";
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/details" element={<PersonalDetails />} />
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
