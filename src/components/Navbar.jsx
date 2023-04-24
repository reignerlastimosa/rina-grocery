import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import {MagnifyingGlass} from "phosphor-react";
import { useState, useEffect } from "react";
import "./Navbar.css";

export const Navbar = ({setSearchQuery, login, setLogin, existingAccount}) => {

  const [showLogOut, setShowLogOut] = useState(false);

  const handleLogOut = ()=>{
    
    localStorage.removeItem('expirationTime');
    window.location.reload();
    
  }


  const handleChangePass = () =>{
    setShowLogOut(false);
    window.location.href="/password";
  }
 
 
  return (
    <div className="navbar">
      
      <div className="links">
        <Link to="/" className="rina"> <span className="logo"> &#8506;</span>     RINA <br/><span>Grocery Store</span> </Link>
        <div class="input-wrapper">
          <MagnifyingGlass class="left-button" size={20} />
          <input type="text" placeholder="Type to search..."  onChange={(e)=>setSearchQuery(e.target.value)}/>
        </div>
    {
      !login ?
      <Link to="/login">
      Login
    </Link>:

    <p onClick={()=> setShowLogOut(!showLogOut)}> @{existingAccount.username}  </p>
    }
    { 
    !showLogOut ?
      ""
      :
      
      <div className="showLogout" > 
      
      
      <ul>
      
       <li onClick={handleChangePass}>Change Password</li>  
         <li onClick={handleLogOut}>Logout</li> 
        </ul>
      </div>
    }
        
      {
        login ?
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        :
        <Link to="/account">
        <ShoppingCart size={32} />
      </Link>
      }
        
      </div>
    </div>
  );
};