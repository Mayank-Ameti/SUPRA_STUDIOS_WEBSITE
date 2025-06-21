import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const ServicesPage = () => {
  const navigate = useNavigate();

  // Optional: Curtain animation here
  useEffect(() => {
    const left = document.querySelector('.curtain-left');
    const right = document.querySelector('.curtain-right');

    left.classList.add('open-left');
    right.classList.add('open-right');
  }, []);

  return (
    <div className="services-container">
      <div className="curtain-left"></div>
      <div className="curtain-right"></div>

      <div className="services-content">
        <h1>Our Services</h1>
        <p>We produce films, documentaries, and branded content with creative excellence.</p>

        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
