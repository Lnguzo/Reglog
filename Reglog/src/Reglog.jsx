import React from "react";
import "./Reglog.css";
import user_icon from "./assets/person.jpg";
import email_icon from "./assets/mail.jpg";
import password_icon from "./assets/pass.jpg";

const Reglog = () => {
  return (
    <div className="container">
        <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
         </div>
      <div className="inputs">
      <div className="input">
        <img src={user_icon} alt="" />
        <input type='text' placeholder='Username'/>
      </div>

      <div className="input">
        <img src={email_icon} alt="" />
        <input type='email' placeholder='email'/>
      </div>

      <div className="input">
        <img src={password_icon} alt="" />
        <input type='password' placeholder='password'/>
      </div>
    </div>
      <div className="forgot-password">LostPassword? <span>Click Here!</span></div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login </div>
        </div>
    </div>
  );
}   

export default Reglog;