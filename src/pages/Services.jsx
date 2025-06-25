import React, { useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import servicesBg from '../assets/Services1-bg.jpg';

const servicesList = [
  "Film Production",
  "Indie Films (90M content)",
  "Web Series",
  "Short Films",
  "Documentaries",
  "Theatre Production",
  "Ad Films ",
  "Music Videos",
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="services-container"
      style={{
    height: '100vh',
    overflow: 'hidden',
    backgroundImage: `url(${servicesBg})`, // ✅ just the image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}
    >
      <h1 className="services-title">Our Services</h1>

      <div className="services-cards-wrapper">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className={`service-panel ${
              hoveredIndex === index
                ? 'hovered'
                : hoveredIndex !== null
                ? 'not-hovered'
                : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
           <div
  className={`panel-label ${hoveredIndex === index ? 'label-hovered' : ''}`}
>
  {service}
</div>


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
