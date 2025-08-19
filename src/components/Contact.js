import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        'service_1lc9klx', 
        'template_tvgfd5q',
        formRef.current,
        'PwNFHBwPc5qYwwqXA' 
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      img: "/img/email_w.png",
      title: "Email",
      value: "manalojohnpatricksangalang@gmail.com",
      link: "mailto:manalojohnpatricksangalang@gmail.com"
    },
    {
      img: "/img/number_w.png",
      title: "Phone No.",
      value: "+62 931 793 4062",
      link: "tel:+629317934062"
    },
    {
      img: "/img/facebook_w.png",
      title: "Facebook",
      value: "John Patrick Manalo",
      link: "https://www.facebook.com/patsftjohn"
    },
    {
      img: "/img/location_w.png",
      title: "Location",
      value: "Cavite, Philippines",
      link: "https://maps.app.goo.gl/P82nFKrSvmahL6i7A"
    }
  ];

  const socialLinks = [
    // { icon: "💼", img: "/img/linkedin.png", label: "LinkedIn", url: "https://www.linkedin.com/in/johnpatrick-manalo-a4903a314/" },
    // { icon: "🐙", img: "/img/github.png", label: "GitHub", url: "https://github.com/JohnPatrickSangalangManalo" },
    // { icon: "🐦", img: "/img/facebook.png", label: "Facebook", url: "https://www.facebook.com/patsftjohn" },
    // { icon: "🐦", img: "/img/instagram.png", label: "Instagram", url: "https://www.instagram.com/pats_ft.j/" },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">GET</span> IN TOUCH
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Let's Connect</h3>
            <p>
              Ready to bring your ideas to life? I'm always excited to discuss new projects, 
              collaborations, or just have a chat about technology and innovation.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  className="contact-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">{info.img ? (<img src={info.img} alt={info.title} />) : info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <span>{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              {/* <h4>Follow Me</h4> */}
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    className="social-icon"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span>{social.img ? (<img src={social.img} alt={social.label} />) : social.icon}</span>
                    <span className="social-label">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-header">
              <h3>Send Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
                <div className="input-border"></div>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
                <div className="input-border"></div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="form-input"
                />
                <div className="input-border"></div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="form-textarea"
                ></textarea>
                <div className="input-border"></div>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <span className="loading-text">
                    <span className="loading-spinner"></span>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {submitStatus && (
                <motion.div
                  className={`submit-status ${submitStatus}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {submitStatus === 'success' ? (
                    <span>✅ Message sent successfully! I'll get back to you soon.</span>
                  ) : (
                    <span>❌ Failed to send message. Please try again.</span>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

