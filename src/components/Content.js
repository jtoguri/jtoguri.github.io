import About from './About';
import Projects from './Projects';
import Skills from './Skills';

import './Content.css';

export default function Content() {

  return (
    <div className="Content"> 
      <About />
      <Projects />
      <Skills />
    </div>
  )
}
