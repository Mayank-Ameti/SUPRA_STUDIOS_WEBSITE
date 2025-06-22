import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Services.css';
import { Link } from 'react-router-dom';
import servicesBg from '../assets/Services-bg.jpg';

const servicesList = [
  "Film Production",
  "Indie Films (90M content)",
  "Web Series",
  "Replace Serials",
  "Short Films / Documentaries",
  "Theatre Production",
  "Ad Films / Music Videos",
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const totalCards = servicesList.length;

  return (
    <div
      className="services-container"
      style={{
        height: '100vh', // 👈 replaces min-height
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(26, 0, 0, 0.85), rgba(26, 0, 0, 0.85)), url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <h1 className="services-title">Our Services</h1>

      <div className="stacked-fullwidth-wrapper">
        {servicesList.map((service, index) => {
          const offsetPercent = (100 / (totalCards - 1)) * index;
          return (
            <div
              key={index}
              className={`service-card ${
                hoveredIndex === index
                  ? 'hovered'
                  : hoveredIndex !== null
                  ? 'not-hovered'
                  : ''
              }`}
              style={{
                left: `calc(${offsetPercent}% - 125px)`, // 125 = half of card width
                zIndex: totalCards - index,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2>{service}</h2>
            </div>
          );
        })}
      </div>
      <motion.div>
      <div className="services-nav">
        <Link to="/home" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About Us</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
      </div>
      </motion.div>
    </div>
  );
};

export default Services;
