import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import bgImage from '../assets/aboutus-bg.png'; 

const AboutUs = () => {
  return (
    <motion.div
      className="aboutus-container"
      style={{
        backgroundImage: `url(${bgImage})`,  
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="overlay">
        <motion.h1
          className="aboutus-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Supra Studios
        </motion.h1>

        <motion.p
          className="aboutus-description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Founded in 2025, Supra Studios is a visionary film production company dedicated to telling authentic stories
          through powerful visual storytelling. With deep cultural roots and a passion for creativity, we bring impactful
          cinema to life — from ideation to execution.
        </motion.p>

        <motion.p
          className="aboutus-description"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Our team is made up of experienced directors, writers, cinematographers, and editors who believe in the magic
          of storytelling. Whether it's a short film, feature, documentary, or branded content — we blend art and
          technology to make every frame memorable.
        </motion.p>

        <motion.div
          className="aboutus-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link to="/home" className="aboutus-card">Home</Link>
          <Link to="/services" className="aboutus-card">Services</Link>
          <Link to="/contact" className="aboutus-card">Contact</Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
