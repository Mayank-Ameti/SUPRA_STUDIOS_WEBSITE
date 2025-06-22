import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <motion.div
      className="homepage full-section"
      initial={{ backgroundColor: "#7c0a02", opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 className="section-title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        Our Vision
      </motion.h2>
      <p className="section-text">
        To make the world turn and look at us through the power of our stories.
      </p>

      <motion.h2 className="section-title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
        Our Mission
      </motion.h2>
      <p className="section-text">
        We aim to craft cinema that moves hearts, starts conversations, and brings real stories to life.
      </p>

      <motion.h2 className="section-title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}>
        Our Journey
      </motion.h2>
      <p className="section-text">
        Founded in 2025, Supra Studios started with a passion for storytelling. With deep cultural roots and cinematic ambition, we’re here to make a mark.
      </p>

      <div className="cards-section">
        <Link to="/services" className="info-card">Services</Link>
        <Link to="/about" className="info-card">About Us</Link>
        <div className="info-card">Contact</div>
      </div>
    </motion.div>
  );
};

export default HomePage;
