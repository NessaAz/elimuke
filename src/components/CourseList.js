import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
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

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;



