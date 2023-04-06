import React, { useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Authentication/LoginPage";
import Navbar from "./components/Navbar";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = useCallback(() => {
    setAuthenticated(true);
  }, []);

  const handleLogout = useCallback(() => {
    setAuthenticated(false);
  }, []);

  return (
    <Router>
      <Navbar authenticated={authenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={authenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
