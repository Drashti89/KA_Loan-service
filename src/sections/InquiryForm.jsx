import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/InquiryForm.css';

// =========================================================================
// EMAILJS CONFIGURATION
// =========================================================================
// You can EITHER paste your credentials directly here OR define them in a `.env` file:
// VITE_EMAILJS_PUBLIC_KEY="your_public_key"
// VITE_EMAILJS_SERVICE_ID="your_service_id"
// VITE_EMAILJS_ADMIN_TEMPLATE_ID="your_admin_template_id"
// VITE_EMAILJS_USER_TEMPLATE_ID="your_user_template_id"
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "6OQcB_kvFuV0Cllzz"; 
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_ioxz8ps";
const EMAILJS_ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID || "template_bsifhjx"; // Target: drashtimanguwala@gmail.com
const EMAILJS_USER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID || "template_iyipkpq";     // Target: Auto-reply to user

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    const phoneRegex = /^[0-9]{10}$/;
    const sanitizedPhone = formData.phone.replace(/[\s-()]/g, '');
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(sanitizedPhone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.loanType) {
      errors.loanType = 'Please select a loan type';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    // Prevent duplicate submissions
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Ensure SDK is initialized with public key
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (initErr) {
      console.warn("EmailJS SDK initialization warning:", initErr);
    }

    // 1. Prepare parameters for the ADMIN email
    // Multiple alias mappings are passed to ensure 100% template compatibility out-of-the-box!
    const adminTemplateParams = {
      to_email: "drashtimanguwala@gmail.com",
      subject: "New Loan Inquiry – Krishna Association",
      client_name: formData.name,
      from_name: formData.name,
      name: formData.name,
      
      client_phone: formData.phone,
      phone: formData.phone,
      
      client_email: formData.email,
      email: formData.email,
      reply_to: formData.email,
      
      loan_type: formData.loanType,
      message: formData.message || "No message provided"
    };

    // 2. Prepare parameters for the USER auto-reply email
    const userTemplateParams = {
      to_email: formData.email,
      email: formData.email,
      reply_to: "drashtimanguwala@gmail.com",
      
      to_name: formData.name,
      client_name: formData.name,
      name: formData.name,
      
      subject: "Thank You for Contacting Krishna Association",
      reply_message: `Thank you for contacting Krishna Association.

We have received your inquiry successfully. Our team will review your request and contact you within 24–48 hours.

We appreciate your interest in our loan services.

Regards,
Krishna Association`,
      message: `Thank you for contacting Krishna Association.

We have received your inquiry successfully. Our team will review your request and contact you within 24–48 hours.

We appreciate your interest in our loan services.

Regards,
Krishna Association`
    };

    try {
      // Fail-fast if default placeholders are present to provide highly actionable diagnostic errors
      if (EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY" || EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
        throw new Error("EmailJS keys are set to default placeholders. Please replace the placeholders with your actual keys inside 'src/sections/InquiryForm.jsx' or a local '.env' file.");
      }

      // 3. Dispatch both emails concurrently for ultra-fast, non-blocking UI transition
      await Promise.all([
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TEMPLATE_ID, adminTemplateParams),
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_USER_TEMPLATE_ID, userTemplateParams)
      ]);

      // 4. Update UI to success state
      setSubmitStatus('success');

      // 5. Reset form inputs
      setFormData({
        name: '',
        phone: '',
        email: '',
        loanType: '',
        message: ''
      });
    } catch (error) {
      // Detailed error printing for developer diagnostics
      console.error("=================== EMAILJS INTEGRATION ERROR ===================");
      console.error("Failed to send inquiry emails.");
      console.error("Status Code:", error.status || "N/A");
      console.error("Error Message:", error.text || error.message || error);
      console.error("=================================================================");
      
      setErrorMessage(error.text || error.message || String(error));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Ready to <span className="text-gold">Start?</span></h2>
            <p>Fill out the form and our financial expert will get back to you within 24 hours.</p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon"><Phone /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 9376666999</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>drashtimanguwala@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>Shop No.101 Swati Chamber, Delhi Gate-Galemandi Main Road, Surat, Gujarat</p>
                </div>
              </div>
            </div>

            <div className="map-placeholder">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.508581137021!2d72.8339!3d21.2018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzA2LjUiTiA3MsKwNTAnMDEuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="200" 
                style={{ border: 0, borderRadius: '15px' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps"
               ></iframe>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div 
                  key="success"
                  className="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="success-icon-box">
                    <CheckCircle size={60} className="success-icon" />
                  </div>
                  <h3>Inquiry Submitted!</h3>
                  <p>
                    Thank you! Your loan inquiry has been successfully sent .
                  </p>
                  <p className="success-subtext">
                    We will contact you soon.
                  </p>
                  <button 
                    className="btn btn-primary reset-btn" 
                    onClick={() => setSubmitStatus('idle')}
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  className="contact-form" 
                  onSubmit={handleSubmit} 
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {submitStatus === 'error' && (
                    <div className="error-banner">
                      <AlertCircle size={20} style={{ flexShrink: 0 }} />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  
                  <div className={`form-group ${validationErrors.name ? 'has-error' : ''}`}>
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      placeholder="Enter your full name" 
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                    {validationErrors.name && (
                      <span className="error-text">{validationErrors.name}</span>
                    )}
                  </div>
                  
                  <div className="form-row">
                    <div className={`form-group ${validationErrors.phone ? 'has-error' : ''}`}>
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone}
                        placeholder="Enter 10-digit number" 
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {validationErrors.phone && (
                        <span className="error-text">{validationErrors.phone}</span>
                      )}
                    </div>
                    <div className={`form-group ${validationErrors.email ? 'has-error' : ''}`}>
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        placeholder="Enter email" 
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                      {validationErrors.email && (
                        <span className="error-text">{validationErrors.email}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className={`form-group ${validationErrors.loanType ? 'has-error' : ''}`}>
                    <label>Loan Type</label>
                    <select 
                      name="loanType" 
                      value={formData.loanType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    >
                      <option value="">Select Loan Type</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Vehicle Loan">Vehicle Loan</option>
                      <option value="Working Capital">Working Capital</option>
                      <option value="Education Loan">Education Loan</option>
                      <option value="Machinery Loan">Machinery Loan</option>
                    </select>
                    {validationErrors.loanType && (
                      <span className="error-text">{validationErrors.loanType}</span>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label>Message (Optional)</label>
                    <textarea 
                      name="message" 
                      value={formData.message}
                      rows="4" 
                      placeholder="Tell us about your requirements"
                      onChange={handleChange}
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        Submitting Inquiry... <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Inquiry <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
