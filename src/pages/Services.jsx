import React, { useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

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

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>

      <div className="stacked-card-wrapper">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className={`service-card ${hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'not-hovered' : ''}`}
            style={{
              left: `${index * 140}px`, // offset horizontally
              zIndex: hoveredIndex === index ? 10 : index,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <h2>{service}</h2>
          </div>
        ))}
      </div>

      <div className="services-nav">
        <Link to="/home" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About Us</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
      </div>
    </div>
  );
};

export default Services;
