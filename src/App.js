// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landing';
import About from './components/About';
import Courses from './components/CourseList';
import Testimonials from './components/Testimonials';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';
import StudentDashboard from './components/StudentDashboard';
import InstructorDashboard from './components/InstructorDashboard';
import ApproverDashboard from './components/ApproverDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/approver-dashboard" element={<ApproverDashboard />} />
    
      </Routes>
    </Router>
  );
};

export default App;
