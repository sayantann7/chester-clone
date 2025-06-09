
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-crimson leading-relaxed text-foreground">
          Hey there, I'm <span className="font-semibold">Chester</span> 👋 Welcome to my{' '}
          <span className="font-semibold">digital garden</span> 🌱 I like building{' '}
          <span className="font-semibold">things</span>, and I'm currently helping to build{' '}
          <span className="font-semibold underline decoration-blue-400 decoration-wavy">Mobbin</span>.
        </h1>
        
        <p className="text-2xl font-crimson leading-relaxed text-foreground mt-8">
          In my free time, I enjoy brewing <span className="font-semibold">coffee</span>, tending to my{' '}
          <span className="font-semibold">plants</span> and <span className="font-semibold">climbing</span>{' '}
          (plastic) rocks.
        </p>
        
        <p className="text-2xl font-crimson leading-relaxed text-foreground mt-8">
          I do some <span className="font-semibold">reading</span> and{' '}
          <span className="font-semibold">writing</span> as well, albeit not as consistently, but I'm working on being better at that.
        </p>
      </div>
    </div>
  );
};

export default Hero;
