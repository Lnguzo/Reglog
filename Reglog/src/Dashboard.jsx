import React  from "react";
import "./Reglog.css";


const Dashboard = ({user,onlogout}) => {
    <Dashboard user={user} onlogout={handleLogout}/>
    return (
         <div className="dashboard-container">
           <h1 className="Dashboard-title">Dashboard</h1>
           <h2 className="Welcome-dashboard">welcome, {user.name}</h2>
           <p className="Email">Email: {user.eamil}</p>

           <button classname="logout-btn" 
               onClick="OnLogout()">
              Logout
             </button>
          </div>
    );

};
export default Dashboard;