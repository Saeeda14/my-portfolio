import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'MealFlick',
    image: './public/images/mealflick.png',
    link: 'https://saeeda14.github.io/meal-flick/',
    githubLink: 'https://github.com/Saeeda14/meal-flick.git',
  },
  {
    title: 'Code Quiz',
    image: './public/images/codequiz.png',
    link: 'https://saeeda14.github.io/code-quiz/',
    githubLink: 'https://github.com/Saeeda14/code-quiz.git',
  },
  {
    title: 'Password Generator',
    image: './public/images/passgen.png',
    link: 'https://saeeda14.github.io/password-generator/',
    githubLink: 'https://github.com/Saeeda14/password-generator.git',
  },
  {
    title: 'Weather Dashboard',
    image: './public/images/weatherdash.png',
    link: 'https://saeeda14.github.io/weather-app/',
    githubLink: 'https://github.com/Saeeda14/weather-app.git',
  },

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
