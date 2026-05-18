import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, UserCheck } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const floatingCardVariants = {
    animate: (i) => ({
      y: [0, -20, 0],
      transition: {
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-effects">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="badge">
            <span className="badge-dot"></span>
            Professional Financial Solutions
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Empowering Your <br />
            <span className="text-gradient">Financial Journey</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle">
            Krishna Association provides trusted and fast loan solutions for individuals 
            and businesses with professional guidance and smooth support.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-btns">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now <ArrowRight size={20} />
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-trust-badges">
            <div className="trust-badge">
              <Zap size={20} className="badge-icon" />
              <span>Fast Approval</span>
            </div>
            <div className="trust-badge">
              <ShieldCheck size={20} className="badge-icon" />
              <span>Trusted Service</span>
            </div>
            <div className="trust-badge">
              <UserCheck size={20} className="badge-icon" />
              <span>Expert Guidance</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="hero-visual">
          <motion.div 
            className="main-card-container"
            initial={{ rotateY: 20, rotateX: 10, opacity: 0 }}
            animate={{ rotateY: 0, rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="main-illustration">
              {/* This would be a 3D-like illustration or premium image */}
              <div className="card-mockup">
                 <div className="card-header">
                    <div className="card-logo">KA</div>
                    <div className="card-chip"></div>
                 </div>
                 <div className="card-number">**** **** **** 9999</div>
                 <div className="card-footer">
                    <div className="card-holder">KRISHNA ASSOCIATION</div>
                    <div className="card-expiry">12/30</div>
                 </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              className="floating-element float-1"
              custom={0}
              variants={floatingCardVariants}
              animate="animate"
            >
              <div className="mini-card">
                <div className="mini-icon gold"><Zap size={16} /></div>
                <div className="mini-info">
                  <span className="label">Loan Approved</span>
                  <span className="value">₹ 25,00,000</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="floating-element float-2"
              custom={1}
              variants={floatingCardVariants}
              animate="animate"
            >
              <div className="mini-card">
                <div className="mini-icon blue"><ShieldCheck size={16} /></div>
                <div className="mini-info">
                  <span className="label">Verified Status</span>
                  <span className="value">Premium Client</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="floating-element float-3"
              custom={2}
              variants={floatingCardVariants}
              animate="animate"
            >
              <div className="stat-circle">
                <span className="percent">99%</span>
                <span className="label">Success</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
