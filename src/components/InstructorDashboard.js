// src/components/InstructorDashboard.js
import React, { useState } from 'react';
import axios from 'axios';
import './InstructorDashboard.css';

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
    <div className="instructor-dashboard-container">
      <div className="instructor-dashboard-wrapper">
        <h2>Instructor Dashboard</h2>
        <form onSubmit={onSubmit} className="course-form">
          <div className="form-group">
            <label htmlFor="title">Course Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={onChange}
              placeholder="Course Title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Course Description</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={onChange}
              placeholder="Course Description"
              required
            ></textarea>
          </div>
          <button type="submit" className="create-course-button">
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default InstructorDashboard;
