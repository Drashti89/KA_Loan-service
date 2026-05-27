// React import not required with automatic JSX runtime
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">KRISHNA</span>
                <span className="logo-subtext">ASSOCIATION</span>
              </div>
              <p className="footer-desc">
                Providing trusted financial solutions with professional guidance and excellence for over 15 years.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Loan Services</h4>
              <ul>
                <li><a href="#services">Personal Loan</a></li>
                <li><a href="#services">Home Loan</a></li>
                <li><a href="#services">Business Loan</a></li>
                <li><a href="#services">Education Loan</a></li>
                <li><a href="#services">Machinery Loan</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="contact-info-footer">
                <div className="contact-item">
                  <Phone size={18} />
                  <span>+91 9376666999</span>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <span>krishna.associates1982@gmail.com</span>
                </div>
                <div className="contact-item">
                  <MapPin size={18} />
                  <span>Shop No.101 Swati Chamber, Surat, Gujarat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Krishna Association. All Rights Reserved. Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
