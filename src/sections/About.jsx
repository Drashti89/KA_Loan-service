// React import not required with automatic JSX runtime
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="image-stack">
              <div className="image-main">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" alt="Modern Office" />
              </div>
              <div className="image-sub">
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600" alt="Meeting" />
              </div>
              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <span className="section-subtitle">About Krishna Association</span>
            <h2 className="section-title">Your Trusted Partner in <span className="text-gold">Financial Growth</span></h2>
            <p className="about-description">
              Krishna Association has been at the forefront of financial consulting, 
              providing personalized loan solutions that empower individuals and 
              businesses to achieve their dreams. We believe in transparency, speed, 
              and professional integrity.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <CheckCircle2 className="feature-icon" />
                <div>
                  <h4>Professional Guidance</h4>
                  <p>Our experts analyze your needs to suggest the best financial path.</p>
                </div>
              </div>
              <div className="about-feature">
                <CheckCircle2 className="feature-icon" />
                <div>
                  <h4>Tailored Solutions</h4>
                  <p>Every loan plan is customized to fit your specific requirements.</p>
                </div>
              </div>
            </div>

            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
