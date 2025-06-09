
import React from 'react';
import ProjectCard from './ProjectCard';

const WritingGrid: React.FC = () => {
  const writings = [
    {
      title: "What the heck is a digital garden?",
      category: "Writing • Blog",
      date: "February 1, 2023",
      description: "So you've landed on my site (or not, that's okay you can check it out here), and you're curious about this \"digital garden\" thing. Or perhaps you've heard of digital gardens..."
    },
    {
      title: "Dune (2021)",
      category: "Writing • Blog",
      date: "November 19, 2021",
      description: "Ah, Dune. I remember the first time watching it in the cinema (yes, I watched it twice). It was literally a jaw-dropping experience, and I remember so many time..."
    },
    {
      title: "Alocasia baginda 'Silver Dragon'",
      category: "Hobbies • Plants",
      image: "/lovable-uploads/714be220-faf1-4c4e-a68e-0f779c3044fd.png",
      tags: ["ARACEAE"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {writings.map((writing, index) => (
          <ProjectCard
            key={index}
            {...writing}
          />
        ))}
      </div>
    </div>
  );
};

export default WritingGrid;
