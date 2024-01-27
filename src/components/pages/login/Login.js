import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginDetails = async () => {
    console.log("user details",email,password);

    let result = await fetch('http://localhost:5000/login',{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    let response = await result.json()
    console.log(response,"login response api")
    if(response.name){
     localStorage.setItem('user',JSON.stringify(response))

     navigate("/details");
    }else{
      alert("please enter correct password")
    }
    // alert("login Successfully")
  };

  return (
    <div className="login-form-container">
      <h2 className="login-header">Nice to Meet You Again :)</h2>

      <div class="input-container">
        <div className="icon-style">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <label htmlFor="UserName" className="label">Email </label>
        </div>
        <input
          className="input-Style-login"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter User Name"
        />
      </div>

      <div className="input-container">
        <div className="icon-style">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <label htmlFor="password" className="label">Password</label>
        </div>
        <input
          className="input-Style-login"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
      </div>
      <button className="submit-btn-style" onClick={LoginDetails}>
        Submit
      </button>
    </div>
  );
}

export default Login;
