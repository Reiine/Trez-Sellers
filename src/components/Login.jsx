import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () =>{
        try {
            const response = await axios.post('http://localhost:3001/login',{
                email,password
            });
            console.log(response.data);
            if (response.data === 'success') {
                navigate('/dashboard');
            }
        } catch (error) {
            console.log("Error logging in");
        }
    }

  return (
    <div className="login-cover">
      <div className="login-form">
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <Button variant="primary" onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
