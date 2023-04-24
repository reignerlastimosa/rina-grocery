import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
export const LoginCart = () =>{
    return (
        <div className="loginCart">
            <h1>PLEASE LOGIN FIRST TO CHECK YOUR CART</h1>
            <Link to="/login">  <button>CLICK HERE TO LOGIN</button>  </Link>
        </div>
    )
}