
import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'chester', label: 'Chester' },
    { id: 'projects', label: 'Projects' },
    { id: 'writing', label: 'Writing' },
    { id: 'reading', label: 'Reading' },
    { id: 'hobbies', label: 'Hobbies' }
  ];

  const socialLinks = [
    { label: 'GitHub', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'CV', href: '#' }
  ];

  return (
    <motion.nav 
      className="flex items-center justify-between px-6 py-4 bg-background border-b border-border/20"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-6">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`nav-tab text-sm ${activeTab === tab.id ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        {socialLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
