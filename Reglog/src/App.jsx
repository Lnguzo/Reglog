import React, { useState } from "react";
import Reglog from "./Reglog";
import Dashboard from "./Dashboard";


function app() {
  const [user, setUser] = useState(JSON.parse(localStorage.getitem("user")));

  //LOGIN
  const handleLogin = (userData) => {
    setUser(userData);
  }
  //LOGOUT
  const hanleLogout = () =>{
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      user ? (
        <Dashboard user={user} onlogout={handleLogout}/>
      ) : (
        <Reglog onLogin ={handleLogin} />
      )
        
    </div>
  );
}   

export default app;