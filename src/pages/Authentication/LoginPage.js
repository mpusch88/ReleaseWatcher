// LoginPage:
//   Initialize state variables for username, password, and error message

//   handleSubmit:
//     Prevent default form submission behavior
//     Validate username and password input
//       If input is invalid:
//         Set appropriate error message in state
//         Exit function
//     Call backend API to authenticate the user with username and password
//       If authentication is successful:
//         Execute onLogin function from props
//         Redirect to the home page or another protected route
//       If authentication fails:
//         Set appropriate error message in state

//   handleKeyPress:
//     Check if the pressed key is "Enter"
//       If true, call handleSubmit

//   handleChange:
//     Update the corresponding state variable (username or password) based on the input field being modified

//   render:
//     Display LoginPage component with a form containing:
//       - Username input field, with a change event handler calling handleChange and a key press event handler calling handleKeyPress
//       - Password input field, with a change event handler calling handleChange and a key press event handler calling handleKeyPress
//       - Submit button, with a click event handler calling handleSubmit
//       - If error message exists in state, display the error message


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
