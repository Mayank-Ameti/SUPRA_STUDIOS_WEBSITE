import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomePage.css';
import bgImage from '../assets/Homepage-bg.avif';

const HomePage = () => {
  return (
    <motion.div
      className="homepage-container"
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
      <motion.div className="homepage-overlay">
        <motion.h2
          className="homepage-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="homepage-text"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          To make the world turn and look at us through the power of our stories.
        </motion.p>

        <motion.h2
          className="homepage-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="homepage-text"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          We aim to craft cinema that moves hearts, starts conversations, and brings real stories to life.
        </motion.p>

        <motion.h2
          className="homepage-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Our Journey
        </motion.h2>
        <motion.p
          className="homepage-text"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Founded in 2025, Supra Studios started with a passion for storytelling. With deep cultural roots and cinematic ambition, we’re here to make a mark.
        </motion.p>

        <motion.div
          className="homepage-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Link to="/services" className="homepage-button">Services</Link>
          <Link to="/about" className="homepage-button">About Us</Link>
          <Link to="/contact" className="homepage-button">Contact</Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
