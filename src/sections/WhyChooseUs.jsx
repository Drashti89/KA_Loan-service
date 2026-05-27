// React import not required with automatic JSX runtime
import { motion } from 'framer-motion';
import { Clock, Headphones, FileText, MessageSquare, Briefcase } from 'lucide-react';
import '../styles/WhyChooseUs.css';

const reasons = [
  {
    title: "Quick Process",
    icon: <Clock />,
    color: "#D4AF37"
  },
  {
    title: "Trusted Support",
    icon: <Headphones />,
    color: "#3B82F6"
  },
  {
    title: "Easy Documentation",
    icon: <FileText />,
    color: "#10B981"
  },
  {
    title: "Fast Communication",
    icon: <MessageSquare />,
    color: "#F59E0B"
  },
  {
    title: "Professional Guidance",
    icon: <Briefcase />,
    color: "#6366F1"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-grid">
          <div className="why-content">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">The Krishna <span className="text-gold">Advantage</span></h2>
            <p>We combine decades of expertise with modern technology to provide a seamless financial experience.</p>
            
            <div className="why-stats">
              <div className="stat-item">
                <h3>10k+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>500+</h3>
                <p>Cr. Disbursed</p>
              </div>
            </div>
          </div>

          <div className="why-cards">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                className="why-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="why-icon" style={{ backgroundColor: `${reason.color}20`, color: reason.color }}>
                  {reason.icon}
                </div>
                <h4>{reason.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
