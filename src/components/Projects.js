import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './css/Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    // {
    //   id: 1,
    //   title: "AI-Powered E-Commerce Platform",
    //   description: "A full-stack e-commerce solution with AI-powered product recommendations, real-time inventory management, and advanced analytics dashboard.",
    //   image: "🛒",
    //   category: "fullstack",
    //   technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "AWS"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: true
    // },
    // {
    //   id: 2,
    //   title: "Real-Time Chat Application",
    //   description: "A modern chat application with real-time messaging, file sharing, video calls, and end-to-end encryption using WebRTC and Socket.io.",
    //   image: "💬",
    //   category: "fullstack",
    //   technologies: ["React", "Socket.io", "Express.js", "WebRTC", "Redis"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: true
    // },
    // {
    //   id: 3,
    //   title: "Machine Learning Dashboard",
    //   description: "Interactive dashboard for visualizing machine learning models, data analysis, and predictive analytics with real-time data streaming.",
    //   image: "🤖",
    //   category: "ai-ml",
    //   technologies: ["Python", "TensorFlow", "React", "D3.js", "FastAPI"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: false
    // },
    // {
    //   id: 4,
    //   title: "Mobile Fitness Tracker",
    //   description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with personalized AI coaching and social features.",
    //   image: "💪",
    //   category: "mobile",
    //   technologies: ["React Native", "Firebase", "TensorFlow Lite", "HealthKit", "Google Fit"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: false
    // },
    // {
    //   id: 5,
    //   title: "Blockchain Portfolio Tracker",
    //   description: "Decentralized application for tracking cryptocurrency portfolios with real-time market data, DeFi integration, and portfolio analytics.",
    //   image: "₿",
    //   category: "blockchain",
    //   technologies: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: false
    // },
    // {
    //   id: 6,
    //   title: "Smart Home Automation",
    //   description: "IoT-based home automation system with voice control, sensor integration, and machine learning for predictive automation.",
    //   image: "🏠",
    //   category: "iot",
    //   technologies: ["Python", "Arduino", "TensorFlow", "MQTT", "React"],
    //   liveLink: "#",
    //   githubLink: "#",
    //   featured: false
    // }
  ];

  const filters = [
    // { id: 'all', label: 'All Projects' },
    // { id: 'fullstack', label: 'Full-Stack' },
    // { id: 'ai-ml', label: 'AI/ML' },
    // { id: 'mobile', label: 'Mobile' },
    // { id: 'blockchain', label: 'Blockchain' },
    // { id: 'iot', label: 'IoT' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">FEATURED</span> PROJECTS
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="filter-container"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
              whileHover={{ y: -10 }}
            >
              {project.featured && (
                <div className="featured-badge">
                  <span>⭐ Featured</span>
                </div>
              )}
              
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <motion.a
                    href={project.liveLink}
                    className="project-link live"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>🌐 Live Demo</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.githubLink}
                    className="project-link github"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>📁 Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Ready to Start Your Project?</h3>
          <p>Let's collaborate to bring your ideas to life with cutting-edge technology</p>
          <motion.button
            className="cta-button"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

