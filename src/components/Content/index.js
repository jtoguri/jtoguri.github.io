import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Socials from '../Socials';
import Contact from '../Contact';

import './Content.css';

export default function Content() {

  return (
    <div className="Content"> 
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
