import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const LoginDetails = async () => {
        console.log("user details", email, password);

        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        let response = await result.json();
        console.log(response, "login response api");
        if (response.name) {
            localStorage.setItem("user", JSON.stringify(response));
            navigate("/details");
        } else {
            alert("Please enter correct password");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <h2 className="login-header">Nice to Meet You Again :)</h2>

                <div className="input-container">
                    <div className="icon-style">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <label htmlFor="UserName" className="label">
                            Email{" "}
                        </label>
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
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                    </div>
                    <input
                        className="input-Style-login"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                    />
                </div>
                <div className="register-button">
                    <button onClick={LoginDetails} className="login-style">
                        Login
                    </button>
                    <button className="register-style">
                        <Link className="text-style" to="/register">New User ? Register</Link>
                    </button>
                </div>
                <Link to="#" className="forget-password-link">
                    Forget Password?
                </Link>
            </div>
        </div>
    );
}

export default Login;
