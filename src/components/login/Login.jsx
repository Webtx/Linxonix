import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "laura" && pass === "yes") {
      setPopupMessage("Welcome, Laura!");
      setShowPopup(true);
    } else {
      setPopupMessage("Invalid username or password. Please try again.");
      setShowPopup(true);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    if (userName === "laura" && pass === "yes") {
      setRedirect(true);
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Linxonix</h1>
          <div className="input-box">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-box">
            <input
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handlePopupClose}>
              &times;
            </span>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
      {redirect && <Navigate to="/" />}
    </div>
  );
};

export default Login;
