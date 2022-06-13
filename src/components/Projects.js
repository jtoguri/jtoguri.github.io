import './Projects.css';

import projects from '../data/projects.json';

export default function Projects() {
  const projectHTML = projects.map(el => {
    return (
      <div className="project">
        <img src="#" alt="Project screen-shot"/>
        <h3>{el.name}</h3>
        <p>{el.description}</p>
        <ul>
          <li><a href="#">active link</a></li>
          <li><a href="#">view src code</a></li>
        </ul>
      </div>
    )
  });
  return (
    <div id="Projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projectHTML}
      </div>
    </div>
  )
}
