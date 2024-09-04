// src/components/About.js
import React from 'react';
import './About.css';
import logo from '../Component/Logo.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
      <img src={logo} alt="Company Logo" className="about-image" />
        <div className="about-text">
          <h2>About Us</h2>
          <p>We are a group of passionate web developers with a keen interest in building interactive and user-friendly web applications. We enjoy learning new technologies and improving our skills.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
