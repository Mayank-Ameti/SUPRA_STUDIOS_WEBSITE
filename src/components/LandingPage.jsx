import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import logo from '../assets/logo.png';
import HomePage from './HomePage'; // make sure you have HomePage.jsx

const LandingPage = () => {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [swiped, setSwiped] = useState(false);

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0];
    const isFreshNavigation = navEntry?.type === "navigate";

    if (isFreshNavigation) {
      // User launched via URL, reset everything
      setStarted(false);
      setShowIntro(false);
      setSwiped(false);
    } else {
      // Refresh or back-forward cache
      setStarted(true);
      setShowIntro(false);
      setSwiped(true);
    }
  }, []);

  const handleStart = () => {
    setStarted(true);
    setShowIntro(true);

    // Play intro audio
    audioRef.current?.play().catch(err => {
      console.warn('Autoplay blocked:', err);
    });

    // Hide intro after 5 seconds
    setTimeout(() => {
      setShowIntro(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, 5000);
  };

  const handleDragEnd = (e, info) => {
    if (info.offset.y < -150) {
      setSwiped(true);
    }
  };

  return (
    <div className="landing-container">
      <audio ref={audioRef} src="/intro.mp3" preload="auto" />

      {!started ? (
        <div className="start-screen">
          
          <button onClick={handleStart} className="start-btn">Enter</button>
        </div>
      ) : showIntro ? (
        <motion.div
          className="logo-wrapper"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 2.5 }}
        >
          <img src={logo} alt="SUPRA Logo" className="logo-animated" />
          <motion.h1
            className="studio-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1.5 }}
          >
            SUPRA STUDIOS
          </motion.h1>
        </motion.div>
      ) : !swiped ? (
        <motion.div
          className="welcome-slide"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleDragEnd}
        >
          <h1 className="welcome-heading">Welcome to SUPRA STUDIOS</h1>
          <p className="welcome-subtext">Swipe up to explore</p>
          <div className="swipe-indicator">⬆️</div>
        </motion.div>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default LandingPage;
