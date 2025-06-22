import React from 'react';
import './AboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-title">About Supra Studios</h1>
      <p className="aboutus-description">
        Founded in 2025, Supra Studios is a visionary film production company dedicated to telling authentic stories
        through powerful visual storytelling. With deep cultural roots and a passion for creativity, we bring
        impactful cinema to life — from ideation to execution.
      </p>

      <p className="aboutus-description">
        Our team is made up of experienced directors, writers, cinematographers, and editors who believe in the magic
        of storytelling. Whether it's a short film, feature, documentary, or branded content — we blend art and
        technology to make every frame memorable.
      </p>

      <div className="aboutus-links">
        <Link to="/home" className="aboutus-card">Home</Link>
        <Link to="/services" className="aboutus-card">Services</Link>
        <Link to="/contact" className="aboutus-card">Contact</Link>
      </div>
    </div>
  );
};

export default AboutUs;
