import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    text: "Krishna Association helped me get my business loan in record time. Their guidance was professional and the process was incredibly smooth.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Home Owner",
    text: "I was struggling with home loan documentation until I met the team at Krishna Association. They handled everything perfectly.",
    rating: 5
  },
  {
    name: "Amit Mehta",
    role: "Entrepreneur",
    text: "Truly premium service. They understand the financial landscape and provide solutions that actually make sense for your growth.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Our <span className="text-gold">Clients Say</span></h2>
        </div>

        <div className="testimonial-carousel">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Quote className="quote-icon" size={40} />
              <div className="rating">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary-gold)" color="var(--primary-gold)" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
              <div className="client-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <span>{testimonials[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-controls">
            <button onClick={prevTestimonial} className="control-btn"><ChevronLeft /></button>
            <button onClick={nextTestimonial} className="control-btn"><ChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
