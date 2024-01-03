import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo/logoBG.png'
import {Button} from 'react-bootstrap'
export default function navbar() {
  return (
    <div>
      
<ul className="nav">
<img className="logo-style" src={Logo} alt="logo" />
    <li><Link to="/">Home</Link></li> 
    {/* <li> <Link to="/dashboard"> </Link>  </li> */}
    <li><Link to="/details">Details</Link></li>
    <li><Link to="/register">Register</Link></li>
    <li><Link to="/login">Login</Link></li>  
  </ul>
    </div>
  );
}
