// React import not required with automatic JSX runtime
import { motion } from 'framer-motion';
import { 
  User, 
  Home, 
  Briefcase, 
  Car, 
  Building2, 
  GraduationCap, 
  Settings2 
} from 'lucide-react';
import '../styles/Services.css';

const services = [
  {
    title: "Personal Loan",
    icon: <User />,
    desc: "Quick personal loans for all your immediate needs with minimal documentation."
  },
  {
    title: "Home Loan",
    icon: <Home />,
    desc: "Flexible home loan options to help you buy or build your dream home."
  },
  {
    title: "Business Loan",
    icon: <Briefcase />,
    desc: "Empower your business growth with our tailored financial support."
  },
  {
    title: "Vehicle Loan",
    icon: <Car />,
    desc: "Drive home your dream vehicle with attractive interest rates."
  },
  {
    title: "Working Capital Loan",
    icon: <Building2 />,
    desc: "Ensure smooth business operations with our working capital solutions."
  },
  {
    title: "Education Loan",
    icon: <GraduationCap />,
    desc: "Invest in your future with our comprehensive education financing."
  },
  {
    title: "Machinery Loan",
    icon: <Settings2 />,
    desc: "Upgrade your production capabilities with modern machinery loans."
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Expertise</span>
          <h2 className="section-title">Comprehensive <span className="text-gold">Loan Solutions</span></h2>
          <p className="section-desc">We offer a wide range of financial products designed to meet every stage of your life and business.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="card-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
