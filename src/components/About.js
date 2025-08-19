import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">ABOUT</span> ME
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Innovation Meets Creativity</h3>
            <p>
              I'm a passionate developer who believes in pushing the boundaries of what's possible 
              in the digital realm. With a blend of technical expertise and creative vision, 
              I craft experiences that not only function flawlessly but also inspire and engage.
            </p>
            <p>
              My journey in technology began with curiosity and has evolved into a mission to 
              create digital solutions that make a difference. Every project is an opportunity 
              to learn, grow, and push the limits of innovation.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <div className="feature-text">
                  <h4>Fast & Efficient</h4>
                  <p>Optimized performance for seamless user experiences</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <div className="feature-text">
                  <h4>Creative Design</h4>
                  <p>Unique and innovative design solutions</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <div className="feature-text">
                  <h4>Technical Excellence</h4>
                  <p>Clean, maintainable, and scalable code</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="visual-container">
              <div className="hexagon-container">
                <div className="hexagon hexagon-1">
                  <span>React</span>
                </div>
                <div className="hexagon hexagon-2">
                  <span>Node.js</span>
                </div>
                <div className="hexagon hexagon-3">
                  <span>Python</span>
                </div>
                <div className="hexagon hexagon-4">
                  <span>AI/ML</span>
                </div>
                <div className="hexagon hexagon-5">
                  <span>Cloud</span>
                </div>
                <div className="hexagon hexagon-6">
                  <span>DevOps</span>
                </div>
              </div>
              
              <div className="center-circle">
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stat-card">
            <div className="stat-icon">💻</div>
            <h4>Full-Stack Development</h4>
            <p>End-to-end web application development</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">📱</div>
            <h4>Mobile Development</h4>
            <p>Cross-platform mobile applications</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <h4>UI/UX Design</h4>
            <p>User-centered design principles</p>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <h4>Performance Optimization</h4>
            <p>Speed and efficiency optimization</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

