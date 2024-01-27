import React, { useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Logo from "../../assets/Logo/logoBG.png";

export default function Navbar() {
  const auth = localStorage.getItem("user");
const navigate = useNavigate()
const LogOut =() =>{
  localStorage.clear();
  navigate('/register')
}

  return (
    <div>
      <ul className="nav">
        <img className="logo-style" src={Logo} alt="logo" />
        {auth ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link onClick={LogOut} to="/register">LogOut</Link>
            </li>
          </>
        ) : (
          <li className="ml-auto">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
