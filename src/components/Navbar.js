import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './css/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];


    // useEffect(() => {
    //   const homeSection = document.getElementById('home');
    //   if (!homeSection) return;

    //   const observer = new IntersectionObserver(
    //     ([entry]) => {
    //       setIsHomeVisible(entry.isIntersecting);
    //     },
    //     {
    //       root: null,
    //       threshold: 0.5,
    //     }
    //   );

    //   observer.observe(homeSection);

    //   return () => observer.disconnect();
    // }, []);


  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
      <motion.div 
        className="nav-logo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src={window.innerWidth <= 768 ? '/img/logo.png' : '/img/logo.png'}
          alt="Logo"
          className="logo-img"
        />
      </motion.div>

        <div className="nav-menu">
          <div className="nav-items-container">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className="nav-item"
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            className="mobile-nav-item"
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;

