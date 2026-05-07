const Dashboard = ({ user, onLogout }) => {
    if (!user) {
        return <h1>No user Found</h1>;
    }

    return (
        <div className="dashboard-container">
            <h1 className="Dashboard-title">Dashboard</h1>
            <h2 className="Welcome-dashboard">Welcome, {user.name}</h2>
            <p className="Email">Email: {user.email}</p>

            <button className="logout-btn" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
};
export default Dashboard;