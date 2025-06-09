
import React from 'react';

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
    <nav className="flex items-center justify-between px-8 py-6 bg-background border-b border-border/30">
      <div className="flex items-center space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="flex items-center space-x-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
