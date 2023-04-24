import React, { useState, useEffect } from "react";
import "./Login.css";

export const Login = ({setLogin, existingAccount}) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const [formData, setFormData] = useState({ username: '', password: '' });
  const[saveAccount, setSaveAccount] = useState({username: "", password: ""});

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleLogin() {
    
    if (existingAccount) {
			if(formData.username === existingAccount.username && formData.password === existingAccount.password){
        alert("success");
        
        const expirationTime = new Date().getTime() + (60 * 60 * 1000);
        localStorage.setItem('expirationTime', expirationTime);
        setLogin(true);
        window.location.href="/"
      }
      else{
        alert("Login failed, no account found");
        setFormData({username: "", password: ""});
      }
		}
  }

  function handleSignUpChange(event){
    const { name, value } = event.target;
    setSaveAccount({...saveAccount, [name]: value});
  }

  function handleSignUpClick(event) {
    event.preventDefault();
    localStorage.setItem( 'account', JSON.stringify(saveAccount));
   window.location.reload();
  }

 
  

  return (
    <div className="login">
     
        
          <div className="login-content">
            <h1><span className="logo"> &#8506;</span> RINA Grocery Store</h1>
            <p>The leading online grocery store in the Philippines</p>
          </div>

        {
            !showSignUp ? 

            <div className="login-form">
            <h2>Login</h2>
            <input type="text" name="username" value={formData.username} onChange={handleLoginChange} placeholder="Username / Email"/>
            <input type="password" name="password" value={formData.password} onChange={handleLoginChange} placeholder="Password"/>
            <button onClick={handleLogin}>Login</button>
            <p>
              No Account? 
                <a href="#" onClick={() => setShowSignUp(!showSignUp)}>
                &nbsp;Sign Up
              </a>
            </p>
          </div>
          :

          <div className="login-form">
            <h2>Signup</h2>
            
            <input type="text" name="username" value={saveAccount.username} onChange={handleSignUpChange} placeholder="Create Username"/>
            <input type="password" name="password" value={saveAccount.password} onChange={handleSignUpChange} placeholder="Create Password"/>
            <button onClick={handleSignUpClick}>Signup</button>
            <p>
                By signing up, you agree to Rina Grocery Store's Terms of Service & Privacy Policy
            </p>
            <p>
              Already have an account?{" "}
              <a href="#" onClick={() => setShowSignUp(!showSignUp)}>
                Sign in
              </a>
            </p>
          </div>
        }
          
       
      
         

         </div>
  );
};
