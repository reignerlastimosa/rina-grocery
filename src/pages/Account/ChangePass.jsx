import React, { useState, useEffect } from "react";

export const ChangePass = ({existingAccount}) =>{

    const [formData, setFormData] = useState({ prevPass: '', newPass: '' });
    function handleChangePass(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }

    
      function clickChangePass(){
        if(formData.prevPass === existingAccount.password){
          
          existingAccount.password = formData.newPass;
          localStorage.setItem( 'account', JSON.stringify(existingAccount));
          alert("Password change success...");
          window.location.href="/"
        }
        else{
          alert("Invalid request, password does not match...");
          setFormData({prevPass: "", newPass: ""})
        }
        
      }


     
    return (
        <div className="changePass">
            <h3>Change Password</h3>
            <label>Input Previous password</label>
             <input type="password" name="prevPass" value={formData.prevPass} onChange={handleChangePass} placeholder="Previous Password"/> <br/>
             <label>Input New Password</label>
            <input type="password" name="newPass" value={formData.newPass} onChange={handleChangePass} placeholder="New Password"/>
            <br/>

            <button onClick={clickChangePass}>Change</button>
        </div>
    )
}