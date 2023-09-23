import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    image: '/images/project1.jpg',
    link: 'https://example.com/project1',
    githubLink: 'https://github.com/yourusername/project1',
  },
  // Add more project objects here
];

function Portfolio() {
  return (
    <section className="portfolio">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;
