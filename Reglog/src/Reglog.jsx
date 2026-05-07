import axios from "axios";
import React, { useState } from "react";
import "./Reglog.css";
import user_icon from "./assets/person.jpg";
import email_icon from "./assets/mail.jpg";
import password_icon from "./assets/pass.jpg";

const Reglog = ({ onLogin }) => {
  const [action, setAction] = useState("Login");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  // RESET ALL INPUTS
  const resetFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  // Handle submit
  const handleSubmit = async () => {
    // VALIDATION
    if (!email || !password || (action === "Sign Up" && !username)) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      if (action === "Sign Up") {
        const response = await axios.post(
          "http://localhost/bcs/Reglog/Reglog/register.php",
          {
            name: username,
            email: email,
            password: password,
          }
        );

        if (response.data.status === "success") {
          setMessage("Registered successfully! Now login.");
          resetFields();
          setAction("Login");
        } else {
          setMessage(response.data.message || "Registration failed");
        }
      } else {
        const response = await axios.post(
          "http://localhost/bcs/Reglog/Reglog/login.php",
          {
            email: email,
            password: password,
          }
        );

        if (response.data.status === "success") {
          setMessage("Login successful!");
          resetFields();

          //store user
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.user)
          );
          onLogin(response.data.user);

          
        } else {
          setMessage("Invalid credentials. Please sign up first.");
          setAction("Sign Up");
          resetFields();
        }
      }
    } catch (error) {
      console.error("ERROR:", error);
      setMessage("Server error. Check backend.");
    }
  };

  // SWITCH TO SIGN UP
  const switchToSignUp = () => {
    setAction("Sign Up");
    setMessage("");
    resetFields();
  };

  // SWITCH TO LOGIN
  const switchToLogin = () => {
    setAction("Login");
    setMessage("");
    resetFields();
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      {message && <p className="message">{message}</p>}

      <div className="inputs">
        {action !== "Login" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
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
          onClick={ () => {
            if(action == "Sign Up") {
              handleSubmit();
            } else{
              setAction("Sign Up");
            }
          }}
        >
          Sign Up
        </div>

        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={ () => {
            if(action == "Login") {
              handleSubmit();
            } else{
              setAction("Login");
            }
          }}
        >
          Login
        </div>
      </div>

     
    </div>
  );
};

export default Reglog;