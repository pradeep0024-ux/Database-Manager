import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration () {
  const[name, setName] = useState("");
  const[fatherName, setFatherName] = useState("")
  const[email, setEmail] = useState("")
  const[mob, setMob] = useState()
  const[gender, setGender] = useState()
  const[time, setTime] = useState()
const navigate = useNavigate();

const GetUserDetail = ()=>{
  navigate("/")
  alert("Submitted Successfully")
  console.log("userDatial", name,fatherName,email,mob,gender )
}

  return (
    <div className="form-container">
      <h2 className="header">Let's Introduce</h2>

      <div style={{marginBottom:"20px"}}>
        <label htmlFor="fullName">Full Name</label>
        <input
          className="input-Style"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Full Name"
        />
      </div>

      <div style={{marginBottom:"20px"}}>
        <label htmlFor="fatherName">Father Name</label>
        <input
          className="input-Style"
          type="text"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          placeholder="Enter Father Name"
        />
      </div>

      <div style={{marginBottom:"20px"}}>
        <label htmlFor="batchTiming">Batch Timing</label>
        <input
          className="input-Style"
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter Batch Timing"
        />
      </div>

      <div style={{marginBottom:"20px"}}>
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input
          className="input-Style"
          type="text"
          value={mob}
          onChange={(e) => setMob(e.target.value)}
          placeholder="Enter Mobile Number"
        />
      </div>

      <div style={{marginBottom:"20px"}}>
        <label htmlFor="gender">Gender</label>
        <select className="input-Style" id="gender">
          <option value="" disabled selected>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button className="btn-style" type="submit" onClick={GetUserDetail}>
        Submit
      </button>
    </div>
  );
}

export default Registration;
