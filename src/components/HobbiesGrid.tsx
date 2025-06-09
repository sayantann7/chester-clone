
import React from 'react';
import ProjectCard from './ProjectCard';

const HobbiesGrid: React.FC = () => {
  const hobbies = [
    {
      title: "Colombia Finca La...",
      category: "Hobbies • Coffee",
      description: "Colombia • Apartment Coffee\nBlackberry, white peach and grapefruit",
      tags: ["FILTER", "NOW BREWING"]
    },
    {
      title: "Philodendron hederaceum 'Micans'",
      category: "Hobbies • Plants",
      image: "/lovable-uploads/d9132a85-6867-49b6-b29f-63bd0375ada6.png",
      tags: ["ARACEAE"]
    },
    {
      title: "MONOKEI x Hand Engineering KAGE",
      category: "Hobbies • Keyboards",
      image: "/lovable-uploads/714be220-faf1-4c4e-a68e-0f779c3044fd.png",
      tags: ["EMD6060", "GREY 01"]
    },
    {
      title: "2022.12.05 @ Fit Bloc",
      category: "Hobbies • Climbing",
      image: "/lovable-uploads/ac4460e5-f23e-444e-b263-5547ae8b643b.png"
    },
    {
      title: "Fujicolor C200",
      category: "Hobbies • Photography",
      image: "/lovable-uploads/714be220-faf1-4c4e-a68e-0f779c3044fd.png"
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
        {hobbies.map((hobby, index) => (
          <ProjectCard
            key={index}
            {...hobby}
          />
        ))}
      </div>
    </div>
  );
};

export default HobbiesGrid;
