import './Skills.css';

export default function Skills() {
  return (
    <div id="Skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h4>Languages</h4>
          <ul>
            <li>JavaScript</li>
            <li>Bash</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Frameworks</h4>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill">
          <h4>Potential others to include ?</h4>
          <ul>
            <li>Vim</li>
            <li>Linux</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
