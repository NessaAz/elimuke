// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'student',
  });

  const { username, email, password, role } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('User registered successfully');
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h2>Create Your Account</h2>
        <form onSubmit={onSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
              required
              placeholder="Choose a username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              placeholder="Create a strong password"
              minLength="6"
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <div className="role-select">
              {['student', 'instructor', 'approver'].map(userRole => (
                <label key={userRole} className="role-option">
                  <input
                    type="radio"
                    name="role"
                    value={userRole}
                    checked={role === userRole}
                    onChange={onChange}
                  />
                  {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
        </form>

        <div className="signup-link">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
      </div>
    </div>
  );
};

export default Register;
