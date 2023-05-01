import React from "react";
import { Link, useLocation  } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import {MagnifyingGlass} from "phosphor-react";
import { useState, useEffect } from "react";
import "./Navbar.css";

export const Navbar = ({setSearchQuery, login, setLogin, existingAccount}) => {

  const [showLogOut, setShowLogOut] = useState(false);
  const location = useLocation();

  const showSearchInput = location.pathname !== "/login" && location.pathname !== "/account" && location.pathname !== "/password" && location.pathname !=="/cart" && location.pathname !=="/checkout";

  const handleLogOut = ()=>{
    
    localStorage.removeItem('expirationTime');
    window.location.href="/";
    
  }


  const handleChangePass = () =>{
    setShowLogOut(false);
    window.location.href="/password";
  }
 
 
  return (
    <div className="navbar">
      
      <div className="links">
        <Link to="/" className="rina"> <span className="logo"> &#8506;</span>     RINA <br/><span>Grocery Store</span> </Link>

        {showSearchInput && (
        <div class="input-wrapper">
          <MagnifyingGlass class="left-button" size={20} />
          <input type="text" placeholder="Type to search..."  onChange={(e)=>setSearchQuery(e.target.value)}/>
        </div>
        )}
    {
      !login ?
      <div className="navbarFunction">
      <Link to="/login">
      Login
    </Link>
    <Link to="/account">
        <ShoppingCart size={32} />
      </Link>
    </div>:

  <div className="navbarFunction"> 
    <p onClick={()=> setShowLogOut(!showLogOut)}> @{existingAccount.username}  </p>
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
    <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
    </div>
    }
   
      
        
      </div>
    </div>
  );
};