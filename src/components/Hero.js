import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import './css/Hero.css';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => ([
    'FULL-STACK DEVELOPER',
    'UI/UX DESIGNER',
    'CREATIVE THINKER',
    'PROBLEM SOLVER'
  ]), []);

  useEffect(() => {
    let timeout;
    
    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (displayText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].slice(0, displayText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="hero-title">
            <span className="text-gradient">HELLO, I'M</span>
            <br />
            <span className="hero-name">JOHN PATRICK</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </div>
          
          <p className="hero-description">
            Crafting digital experiences that bridge the gap between imagination and reality.
            Welcome to the future of web development.
          </p>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button
            className="cta-button primary"
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW PROJECTS
          </motion.button>
          
          <motion.button
            className="cta-button secondary"
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            GET IN TOUCH
          </motion.button>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={() => scrollToSection('about')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToSection('about');
            }
          }}
        >
          <div className="scroll-arrow"></div>
          <p>Scroll to explore</p>
        </motion.div>
      </div>

      <div className="hero-stats">
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="stat-number">5+</span>
          <span className="stat-label">Projects Completed</span>
        </motion.div>
        
        <motion.div
          className="stat-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="stat-number">2</span>
          <span className="stat-label">Years Experience</span>
        </motion.div>
        
        {/* <motion.div
          className="stat-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <span className="stat-number">100%</span>
          <span className="stat-label">Client Satisfaction</span>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;

