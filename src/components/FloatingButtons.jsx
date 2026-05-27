import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-buttons">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop} title="Scroll to top">
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
