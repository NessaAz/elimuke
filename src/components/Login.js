// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error when user starts typing
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      const decoded = jwtDecode(res.data.token);

      switch (decoded.role) {
        case 'student':
          navigate('/student-dashboard');
          break;
        case 'instructor':
          navigate('/instructor-dashboard');
          break;
        case 'approver':
          navigate('/approver-dashboard');
          break;
        default:
          setError('Invalid user role');
          return;
      }
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Log in to continue</p>
        </div>

        <form onSubmit={onSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter your password"
                required
                minLength="6"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="form-actions">
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            <button type="submit" className="login-button">
              Log In
            </button>
          </div>

          <div className="signup-link">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
