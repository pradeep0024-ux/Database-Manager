import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/login/Login";
import Navbar from "./components/pages/navbar";
import Registration from "./components/pages/Registration";
import PersonalDetails from "./components/pages/PersonalDetails";
import LogOut from "./components/pages/LogOut";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/pages/footer/Footer";
import PrivateComponent from "./components/pages/PrivateComponents";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details" element={<PersonalDetails />} />
          <Route path="/logout" element={<LogOut/>}/>
        </Route>
          <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
