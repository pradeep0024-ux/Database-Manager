import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState();
  const [gender, setGender] = useState();
  const [time, setTime] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate("/");
  //   }
  // });

  const GetUserDetail = async () => {
    console.log("user data", name,
    fatherName,
    email,
    password,
    mob,
    gender,
    time, )
    try {
      let Data = await fetch("http://localhost:5000/register", {
        method: "post",
        body: JSON.stringify({
          name,
          fatherName,
          email,
          password,
          mob,
          gender,
          time,
        }),
        headers: { "Content-type": "application/json" },
      });

      if (Data.ok) {
        let response = await Data.json();
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/");
      } else {
        // Handle HTTP error status codes (e.g., 400, 500)

        throw new Error(`HTTP error! status: ${Data.status}`);
      }
    } catch (error) {
      console.log("data error", error);
    }
  };
  return (
    <div className="form-container">
      <h2 className="header">Let's Introduce</h2>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fullName">Full Name</label>
        <input
          className="input-Style"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Full Name"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fatherName">Father Name</label>
        <input
          className="input-Style"
          type="text"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          placeholder="Enter Father Name"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="fatherName">Email</label>
        <input
          className="input-Style"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Father Name"
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="password">Set Password</label>
        <input
          className="input-Style"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="batchTiming">Batch Timing</label>
        <input
          className="input-Style"
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter Batch Timing"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input
          className="input-Style"
          type="text"
          value={mob}
          onChange={(e) => setMob(e.target.value)}
          placeholder="Enter Mobile Number"
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="gender">Gender</label>
        {/* <input
          className="input-Style"
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Enter gender"
        /> */}
        <select  value={gender} onChange={(e) => setGender(e.target.value)}>
				<option  value="male">Male</option>
				<option  value="female">Female</option>
				<option  value="other">Other</option>
			</select>
      </div>

      <button className="btn-style" type="submit" onClick={GetUserDetail}>
        Submit
      </button>
    </div>
  );
}

export default Registration;
