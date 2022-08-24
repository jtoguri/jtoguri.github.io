import './Skills.css';
import skills from '../../data/skills.json';

export default function Skills() {

  const skillsContainer = skills.map(el => {
    return (
      <div className="skill-category">
        <h4>{el.category}</h4>
        <ul>
          {el.list.map(skill => <li>{skill}</li>)}
        </ul>
      </div>
    );
  });

  return (
    <div id="Skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsContainer}
      </div>
    </div>
  )
}
