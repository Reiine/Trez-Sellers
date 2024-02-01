import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:3001/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      if (response.data ==='success') {
        navigate('/login');
      }
    } catch (error) {
      console.log("Error occured while signing up");
    }
  };

  return (
    <div className="login-cover">
      <div className="login-form">
        <h1>Sign Up</h1>
        <label htmlFor="name">Name: (Preferably Company Name)</label>
        <br />
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <Button variant="primary" onClick={handleSignUp}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Register;
