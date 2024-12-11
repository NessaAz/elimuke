// src/components/InstructorDashboard.js
import React, { useState } from 'react';
import axios from 'axios';

const InstructorDashboard = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const { title, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/courses', formData, {
        headers: { 'x-auth-token': token },
      });
      alert('Course created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Instructor Dashboard</h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="title" value={title} onChange={onChange} placeholder="Course Title" />
        <textarea name="description" value={description} onChange={onChange} placeholder="Course Description"></textarea>
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default InstructorDashboard;
