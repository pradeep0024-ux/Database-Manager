import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./login.css"

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const GetUserDetail = () => {
    navigate("/details");
    // alert("login Successfully")
  };

  return (
    <div className="login-form-container">
      <h2 className="header">Nice to Meet You Again :)</h2>

      <div className="input-container">
        <div className="icon-style">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <label htmlFor="UserName" className="label">User Name</label>
        </div>
        <input
          className="input-Style"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter User Name"
        />
      </div>

      <div className="input-container">
        <div className="icon-style">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <label htmlFor="password" className="label">Password</label>
        </div>
        <input
          className="input-Style"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
      </div>
      <button className="submit-btn-style" onClick={GetUserDetail}>
        Submit
      </button>
    </div>
  );
}

export default Login;
