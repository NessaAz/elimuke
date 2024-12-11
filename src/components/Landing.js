import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">Elimika</Link>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? '×' : '☰'}
          </button>

          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li className="auth-links">
                <Link to="/login" className="register-btn">Login</Link>
                <Link to="/register" className="register-btn">Register</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1>Learn. Grow. Succeed.</h1>
          <p>Elimika is your gateway to transformative online education. Discover courses that empower your personal and professional growth.</p>
          <div className="hero-cta">
            <Link to="/courses" className="cta-primary">Explore Courses</Link>
            <Link to="/register" className="cta-secondary">Start Learning</Link>
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <div className="feature-icon">📚</div>
            <h3>Diverse Courses</h3>
            <p>From technology to arts, we offer a wide range of courses to suit every learner.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">👩‍🏫</div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with real-world experience.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⏰</div>
            <h3>Flexible Learning</h3>
            <p>Study at your own pace, anytime, anywhere with our online platform.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Elimika. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;