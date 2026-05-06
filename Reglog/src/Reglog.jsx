import axios from "axios";
import React, { useState } from "react";
import "./Reglog.css";
import user_icon from "./assets/person.jpg";
import email_icon from "./assets/mail.jpg";
import password_icon from "./assets/pass.jpg";

const Reglog = () => {

  const [action, setAction] = useState("Login");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔥 Handle submit
  const handleSubmit = async () => {
    try {
      if (action === "Sign Up") {
        const response = await axios.post("http://localhost/api/register.php", {
          name: username,
          email: email,
          password: password
        });

        console.log(response.data);
        alert("Registered successfully!");
      } 
      
      else {
        const response = await axios.post("http://localhost/api/login.php", {
          email: email,
          password: password
        });

        console.log(response.data);
        alert("Login successful!");
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">

        {action !== "Login" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input 
              type='text' 
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input 
            type='email' 
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input 
            type='password' 
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

      </div>

      {action !== "Sign Up" && (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">

        <div 
          className={action === "Login" ? "submit gray" : "submit"} 
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>

        <div 
          className={action === "Sign Up" ? "submit gray" : "submit"} 
          onClick={() => setAction("Login")}
        >
          Login
        </div>

      </div>

      {/* 🔥 Submit button */}
      <div className="submit-btn" onClick={handleSubmit}>
        Submit
      </div>

    </div>
  );
};

export default Reglog;