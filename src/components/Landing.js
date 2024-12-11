// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Elimika</h1>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/register">Register/Login</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>We are dedicated to providing high-quality online education to students around the world.</p>
      </section>

      <section className="courses" id="courses">
        <h2>Our Courses</h2>
        <p>Explore a variety of courses taught by experienced instructors.</p>
      </section>

      <section className="testimonials" id="testimonials">
        <h2>Testimonials</h2>
        <p>Hear what our students have to say about their learning experience.</p>
      </section>

      <section className="register" id="register">
        <h2>Register/Login</h2>
        <p>Join our community and start learning today.</p>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us for any inquiries or support.</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Elimika. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
