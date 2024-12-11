// src/components/ApproverDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApproverDashboard = () => {
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

  const approveCourse = async (courseId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:5000/api/courses/${courseId}/approve`, null, {
        headers: { 'x-auth-token': token },
      });
      alert('Course approved successfully');
      setCourses(courses.map(course => course._id === courseId ? { ...course, status: 'Approved' } : course));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Approver Dashboard</h2>
      <h3>Courses Pending Approval</h3>
      <ul>
        {courses.filter(course => course.status === 'Pending').map((course) => (
          <li key={course._id}>
            {course.title}
            <button onClick={() => approveCourse(course._id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApproverDashboard;
