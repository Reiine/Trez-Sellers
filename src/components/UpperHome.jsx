import React from "react";
import connect from "../assets/connect.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UpperHome() {

  return (
    <div className="upperhome-cover">
      <div className="upper-part">
        <h1>Connect with customers all around the world!</h1>
        <img src={connect} alt="connect" />
      </div>
      <div className="upperhome-buttons">
        <p>People are waiting for your designs</p>

        <Button ><Link to={'/login'}>Login</Link></Button>
        <Button variant="outline-light"><Link to={'/register'}>Sign Up</Link></Button>
      </div>
    </div>
  );
}

export default UpperHome;
