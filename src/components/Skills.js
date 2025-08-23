import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './css/Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🌐",
      skills: [
        { name: "React.js", level: 95, color: "#61DAFB" },
        { name: "JavaScript (ES6+)", level: 90, color: "#F7DF1E" },
        { name: "HTML5 & CSS3", level: 95, color: "#E34F26" },
        { name: "TypeScript", level: 85, color: "#3178C6" },
        { name: "Next.js", level: 80, color: "#000000" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88, color: "#339933" },
        { name: "Python", level: 85, color: "#3776AB" },
        { name: "Express.js", level: 90, color: "#000000" },
        { name: "MongoDB", level: 82, color: "#47A248" },
        { name: "PostgreSQL", level: 78, color: "#336791" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 92, color: "#F05032" },
        { name: "Docker", level: 75, color: "#2496ED" },
        { name: "AWS", level: 70, color: "#FF9900" },
        { name: "Figma", level: 80, color: "#F24E1E" },
        { name: "VS Code", level: 95, color: "#007ACC" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">SKILLS</span> & EXPERTISE
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3>Additional Skills & Interests</h3>
          <div className="skills-grid">
            <div className="skill-tag">Machine Learning</div>
            <div className="skill-tag">Data Analysis</div>
            <div className="skill-tag">UI/UX Design</div>
            <div className="skill-tag">Agile Methodologies</div>
            <div className="skill-tag">RESTful APIs</div>
            <div className="skill-tag">GraphQL</div>
            <div className="skill-tag">Testing (Jest, Cypress)</div>
            <div className="skill-tag">CI/CD Pipelines</div>
            <div className="skill-tag">Performance Optimization</div>
            <div className="skill-tag">Security Best Practices</div>
          </div>
        </motion.div>

        <motion.div
          className="learning-section"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>Currently Learning</h3>
          <div className="learning-items">
            <div className="learning-item">
              <div className="learning-icon">🚀</div>
              <div className="learning-content">
                <h4>Rust Programming</h4>
                <p>Exploring systems programming and performance optimization</p>
              </div>
            </div>
            
            <div className="learning-item">
              <div className="learning-icon">🧠</div>
              <div className="learning-content">
                <h4>Advanced AI/ML</h4>
                <p>Deep learning and neural network architectures</p>
              </div>
            </div>
            
            <div className="learning-item">
              <div className="learning-icon">☁️</div>
              <div className="learning-content">
                <h4>Cloud Architecture</h4>
                <p>Advanced cloud deployment and microservices</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

