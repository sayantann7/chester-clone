
import React from 'react';
import ProjectCard from './ProjectCard';

const ReadingGrid: React.FC = () => {
  const books = [
    {
      title: "The Design of Everyday Things",
      category: "Reading • Books",
      author: "Donald A. Norman",
      tags: ["READING"]
    },
    {
      title: "Children of Dune",
      category: "Reading • Books",
      author: "Frank Herbert",
      tags: ["READ"]
    },
    {
      title: "Kentmere Pan 400",
      category: "Photography",
      image: "/lovable-uploads/d9132a85-6867-49b6-b29f-63bd0375ada6.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <ProjectCard
            key={index}
            {...book}
          />
        ))}
      </div>
    </div>
  );
};

export default ReadingGrid;
