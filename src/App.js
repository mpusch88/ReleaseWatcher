import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Authentication/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";

function useAuthentication() {
  const [authenticated, setAuthenticated] = useState(false);

  const login = useCallback(() => {
    setAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
  }, []);

  // Handle user authentication persistence
  useEffect(() => {
    const storedAuth = localStorage.getItem("authenticated");
    if (storedAuth) {
      setAuthenticated(JSON.parse(storedAuth));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("authenticated", JSON.stringify(authenticated));
  }, [authenticated]);

  return { authenticated, login, logout };
}

function App() {
  const { authenticated, login, logout } = useAuthentication();

  return (
    <Router>
      <Navbar authenticated={authenticated} onLogout={logout} />
      <Routes>
        <Route path="/" element={authenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage onLogin={login} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
