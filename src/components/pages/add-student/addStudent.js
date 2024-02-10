import React, { useState } from "react";
import { TextField, Button, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";

//  https://www.copycat.dev/blog/material-ui-form/
const AddStudent = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [timing, setTiming] = useState("");
  const [address, setAddress] = useState("");
  const [join, setJoin] = useState("");

 
  async function handleSubmit(event) {
    event.preventDefault();

    try {
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        const response = await fetch('http://localhost:5000/add-student', {
            method: "POST",
            body: JSON.stringify({ fullName, email, mobile, fatherName, timing, address, join, userId }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        console.log('Student added successfully:', data);
    } catch (error) {
        console.error('Error adding student:', error.message);
       
    }
}
  return (
    <React.Fragment>
      <h2 style={{ marginBottom: "20px" }}>Add Student</h2>
      <form style={{ marginBottom: "20px" }} onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            fullWidth
            required
            sx={{ mb: 4 }} // Add margin bottom
          />
          <TextField
            type="email"
            variant="outlined"
            color="primary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            sx={{ mb: 4 }} // Add margin bottom
          />
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="number"
            variant="outlined"
            color="primary"
            label="mobile"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Batch Timing"
            onChange={(e) => setTiming(e.target.value)}
            value={timing}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            type="date"
            variant="outlined"
            color="primary"
            label="Date of Joining"
            onChange={(e) => setJoin(e.target.value)}
            value={join}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Father Name"
            onChange={(e) => setFatherName(e.target.value)}
            value={fatherName}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
        </Stack>

        <TextField
          type="text"
          variant="outlined"
          color="primary"
          label="Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          fullWidth
          required
          sx={{ mb: 4 }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        //   onClick={handleSubmit}
          style={{ marginBottom: "20px",width:"200px" }}
        >
          Add
        </Button>
      </form>
      {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
    </React.Fragment>
  );
};

export default AddStudent;
