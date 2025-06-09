
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 py-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>🌱</span>
            <span>Planted by Chester</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
