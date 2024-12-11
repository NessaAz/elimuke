// src/components/StudentDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/courses');
        setCourses(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to the login page
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Student Dashboard</h2>
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </header>
      <main className="dashboard-main">
        <h3>Available Courses</h3>
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course._id} className="course-item">
              {course.title}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StudentDashboard;
