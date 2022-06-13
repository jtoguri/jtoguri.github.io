import './Projects.css';

import projects from '../data/projects.json';

export default function Projects() {
  return (
    <div id="Projects">
      <h2>Projects</h2>
      <div className="project-container">
        <div className="project">
          <img src="#" alt="Project screen-shot"/>
          <h3>MVMT Break</h3>
          <p>Description</p>
          <ul>
            <li><a href="#">active link</a></li>
            <li><a href="#">view src code</a></li>
          </ul>
        </div>
        <div className="project">
          <img src="#" alt="Project screen-shot"/>
          <h3>Decision Wizard</h3>
          <p>Description</p>
          <ul>
            <li><a href="#">active link</a></li>
            <li><a href="#">view src code</a></li>
          </ul>
        </div>
        <div className="project">
          <img src="#" alt="Project screen-shot"/>
          <h3>Another Project</h3>
          <p>Description</p>
          <ul>
            <li><a href="#">active link</a></li>
            <li><a href="#">view src code</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
