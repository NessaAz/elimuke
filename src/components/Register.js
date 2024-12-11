import React, { useState } from 'react';
import axios from 'axios';

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
      await axios.post('/api/auth/register', formData);
      alert('User registered successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" value={username} onChange={onChange} placeholder="Name" />
      <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" />
      <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" />
      <select name="role" value={role} onChange={onChange}>
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
        <option value="approver">Approver</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
