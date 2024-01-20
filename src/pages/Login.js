import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const GetUserDetail = () => {
    navigate("/details");
    // alert("Submitted Successfully");
  };

  return (
    <div className="form-container">
      <h2 className="header">Nice To See You Again :)</h2>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="fullName">User Name</label>
        <input
          className="input-Style"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter Full Name"
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="fatherName">Password</label>
        <input
          className="input-Style"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Father Name"
        />
      </div>

      <button className="btn-style" type="submit" onClick={GetUserDetail}>
        Login
      </button>
    </div>
  );
}

export default Login;
