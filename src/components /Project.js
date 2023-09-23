import React from 'react';
import './portfolio.css';

function Project({ title, image, link, githubLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div>
        <a href={link}>Live Demo</a>
        <a href={githubLink}>GitHub</a>
      </div>
    </div>
  );
}

export default Project;
