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
    {
      id: 1,
      title: "MMNCRSYSTEM",
      description: "Municipal Mendez-Nuñez Civil Registry System is a web-based platform that digitizes civil registry records for Mendez-Nuñez, Cavite. It streamlines record retrieval, reduces paperwork, and improves public service efficiency through a user-friendly interface.",
      image: "🏛️",
      imageSrc: "/img/mmncrsystem-cover.png",
      category: "fullstack",
      technologies: ["PHP", "Javascript" ,"SCSS", "CSS", "HTML", "node.js"],
      liveLink: "https://drive.google.com/file/d/1vvTk3xGZKZaNETxhcgNNUYjCNDqs2TLP/view?usp=sharing",
      liveLabel: false,
      // githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "PERSONAL PORTFOLIO",
      description: "A personal portfolio website designed to showcase projects, technical skills, and professional experience. Built using modern web technologies with a focus on performance, accessibility, and responsive design.",
      image: "🌐",
      category: "fullstack",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
      liveLabel: true,
      liveLink: "https://johnpatrick-portpolio.vercel.app/",
      githubLink: "https://github.com/JohnPatrickSangalangManalo/Johnpatrick-portpolio",
      featured: true
    },
    
    {
      id: 3,
      title: "GAMEDEX (ACADEMIC PROJECT)",
      description: "A Flutter-based academic mobile app featuring arcade and retro-style games, organized into Main and Mini categories. It showcases skills in mobile development, game logic, UI/UX design, and teamwork.",
      image: "🤖",
      imageSrc: "/img/gamedex-cover.png",
      category: "mobile",
      technologies: ["Flutter", "Dart"],
      liveLabel: false,
      liveLink: "3",
      // githubLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "BAYBAYIN CLOCK inspired in kdrama ",
      description: "Analog clock inspired by the K-Drama Love Next Door, with numbers written in Baybayin—a blend of Korean drama charm and Filipino heritage.",
      image: "🕜",
      imageSrc: "",
      category: "fullstack",
      technologies: ["HTML", "CSS", "Javascript"],
      liveLink: "https://baybayin-clock.vercel.app/",
      githubLink: "https://github.com/JohnPatrickSangalangManalo/Baybayin-clock",
      featured: false
    },
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
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Fullstack' },
    // { id: 'ai-ml', label: 'AI/ML' },
    { id: 'mobile', label: 'Mobile' },
    // { id: 'blockchain', label: 'Blockchain' },
    { id: 'iot', label: 'IoT' },
    { id: 'multimedia', label: 'Photography/Videography' },
    { id: 'grapics', label: 'Grapics Design' },
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
          className={`projects-grid ${filteredProjects.length === 1 ? 'single' : ''}`}
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
                <img
                  src={project.imageSrc || '/img/default-cover.png'}
                  alt={`${project.title} cover`}
                  className="project-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/img/default-cover.png';
                  }}
                />
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
                  {project.liveLink ? (
                    (() => {
                      const isValidLive = /^https?:\/\//i.test(project.liveLink);
                      const liveHref = isValidLive ? project.liveLink : '/404.html';
                      const liveTarget = isValidLive ? '_blank' : undefined;
                      const liveRel = isValidLive ? 'noreferrer noopener' : undefined;
                      return (
                        <motion.a
                          href={liveHref}
                          className="project-link live"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          target={liveTarget}
                          rel={liveRel}
                        >
                          <span>🔗 {project.liveLabel === true ? 'Visit' : 'Demo'}</span>
                        </motion.a>
                      );
                    })()
                  ) : (
                    <span className="project-link live disabled" aria-disabled="true">
                      🌐 No Demo
                    </span>
                  )}

                  {project.githubLink ? (
                    <motion.a
                      href={project.githubLink}
                      className="project-link github"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span>📁 Source Code</span>
                    </motion.a>
                  ) : (
                    <span className="project-link github disabled" aria-disabled="true">
                      🔒 Private
                    </span>
                  )}
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

