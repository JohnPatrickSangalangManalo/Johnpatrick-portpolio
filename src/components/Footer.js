import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <motion.div
            className="footer-logo"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gradient">PORTFOLIO</h3>
            <p>Innovation • Creativity • Excellence</p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>AI/ML Solutions</li>
              <li>Cloud Architecture</li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>Get In Touch</h4>
            <p>Ready to start your next project?</p>
            <motion.button
              className="footer-cta"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        />

        <div className="footer-bottom">
          <motion.div
            className="footer-copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2025 Your Name. All rights reserved.</p>
            {/* <p>Built with ❤️ and cutting-edge technology</p> */}
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <a href="https://www.linkedin.com/in/johnpatrick-manalo-a4903a314/" className="social-link" aria-label="LinkedIn">
              <img src="/img/linkedin.png" alt="LinkedIn" width="24" height="24" />
            </a>
            <a href="https://github.com/JohnPatrickSangalangManalo" className="social-link" aria-label="GitHub">
              <img src="/img/github.png" alt="GitHub" width="24" height="24" />
            </a>
            <a href="https://www.facebook.com/patsftjohn" className="social-link" aria-label="Facebook">
              <img src="/img/facebook.png" alt="Facebook" width="24" height="24" />
            </a>
            <a href="https://www.instagram.com/pats_ft.j/" className="social-link" aria-label="Instagram">
              <img src="/img/instagram.png" alt="Instagram" width="24" height="24" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 212, 255, 0.6)" }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="arrow-up">↑</span>
      </motion.button>
    </footer>
  );
};

export default Footer;

