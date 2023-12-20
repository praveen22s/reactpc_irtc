import React, { useState } from "react";
import usersData from "./AdminLoginInfo.json";
import './Admin.css'
import AdminPanel from "./AdminPanel";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleLogin = () => {
    const user = usersData.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setLoginSuccess(true);
      setShowErrorMessage(false);
    } else {
      setLoginSuccess(false);
      setShowErrorMessage(true);
    }
  };

  return (
    <div>
      {loginSuccess ? (
        <div>
            <AdminPanel/>
        </div>
      ) : (
        <div className="login-body">
          <div className="login-container">
            <h2>Admin Login</h2>
            {showErrorMessage && (
              <p className="error-message">Incorrect username or password</p>
            )}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
