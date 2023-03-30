import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/users?username=${credentials.username}&password=${credentials.password}`,
      {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: 0,
        },
      }
    );
  
    if (response.status === 200) {
      const data = await response.json();

      if (data.length > 0) {
        onLogin(); // Call the onLogin function after a successful login
        navigate("/"); // Navigate to the home page
      } else {
        setError("Invalid credentials!");
      }
    } else {
      setError("An error occurred. Please try again later.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <div className="LoginPage">
      <h1>ReleaseWatcher</h1>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" className="form-control" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} onKeyPress={handleKeyPress} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="form-control" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} onKeyPress={handleKeyPress} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
