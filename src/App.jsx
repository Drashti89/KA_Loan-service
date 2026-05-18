import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import WhyChooseUs from './sections/WhyChooseUs';
import InquiryForm from './sections/InquiryForm';
import Testimonials from './sections/Testimonials';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reduce loading duration for a fast, responsive user feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader"
            className="loader-container"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Ambient Blurred Fintech Blooms */}
            <div className="loader-bg-bloom-1"></div>
            <div className="loader-bg-bloom-2"></div>
            
            <div className="loader">
              {/* Premium Luxury Icon */}
              <motion.div 
                className="loader-icon-box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="loader-icon-gem"></div>
              </motion.div>

              {/* Full Company Name */}
              <motion.h1 
                className="loader-text"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              >
                <span className="brand-primary">KRISHNA</span>
                <span className="brand-secondary">ASSOCIATION</span>
              </motion.h1>
              
              {/* Elegant Accent Loading Line */}
              <motion.div 
                className="loader-bar-container"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '220px' }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              >
                <div className="loader-bar-line"></div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <InquiryForm />
          </main>
          <Footer />
          <FloatingButtons />
        </motion.div>
      )}
    </div>
  );
}

export default App;
