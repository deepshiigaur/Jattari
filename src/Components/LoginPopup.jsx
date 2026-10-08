// src/Components/LoginPopup.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPopup({ open, onClose }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email address is required.");
      valid = false;
    } else if (email.length > 100) {
      setEmailError("Email cannot exceed 100 characters.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must contain at least 6 characters.");
      valid = false;
    } else if (password.length > 30) {
      setPasswordError("Password cannot exceed 30 characters.");
      valid = false;
    }

    if (!valid) return;

    onClose();

    navigate("/thank-you");
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setShowPassword(false);

    onClose();
  };

  return (
    <div className="login-overlay" onClick={handleClose}>
      <div
        className="login-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="login-close"
          onClick={handleClose}
        >
          ×
        </button>

        <div className="login-modal-content">

          <div className="login-header">
            <span className="login-label">
              JATTARI HOMES
            </span>

            <h2>
              Welcome
              <br />
              <em>back.</em>
            </h2>

            <p>
              Sign in to continue your property journey
              with Jattari Homes.
            </p>
          </div>

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}

            <div className="login-field">
              <label htmlFor="login-email">
                Email Address
              </label>

              <input
                id="login-email"
                type="email"
                maxLength={100}
                value={email}
                placeholder="Enter your email address"
                autoComplete="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />

              {emailError && (
                <span className="login-error">
                  {emailError}
                </span>
              )}
            </div>

            {/* PASSWORD */}

            <div className="login-field">

              <div className="login-password-label">
                <label htmlFor="login-password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert(
                      "Password reset functionality will be available soon."
                    )
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="password-wrapper">

                <input
                  id="login-password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  maxLength={30}
                  value={password}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              {passwordError && (
                <span className="login-error">
                  {passwordError}
                </span>
              )}
            </div>

            {/* REMEMBER */}

            <label className="remember-row">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            {/* SUBMIT */}

            <button
              type="submit"
              className="login-submit"
            >
              Sign In
              <span>↗</span>
            </button>

            <div className="login-divider">
              <span>OR</span>
            </div>

            <p className="login-register">
              Don't have an account?

              <button
                type="button"
                onClick={() =>
                  alert(
                    "Registration functionality will be available soon."
                  )
                }
              >
                Create an account
              </button>
            </p>

          </form>

          <div className="login-footer">
            Your property journey starts here.
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPopup;