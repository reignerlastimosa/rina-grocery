import React from "react";
import { useState, useEffect } from "react";

export const Checkout =() =>{
    const [timeLeft, setTimeLeft] = useState(5 * 60); 
    const [timeIsUp, setTimeIsUp] = useState(false); 
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    useEffect(() => {
      if (timeLeft === 0) {
        setTimeIsUp(true);
      }
    }, [timeLeft]);
  
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
  
    return (
      <div className="checkoutPage">
        {timeIsUp ? (
          <h1 className="time">You may now take your groceries at Rina Grocery Store. Thank you</h1>
        ) : (
          <div>
            <h1>  Your groceries are now being prepared. Please wait for 5 minutes </h1>
            <h2>Time left: {`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`} </h2></div>
          
        )}
        
      </div>
    );
}