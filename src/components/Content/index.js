import About from '../About';
import Projects from '../Projects';
import Skills from '../Skills';
import Socials from '../Socials';
import Contact from '../Contact';

import './Content.scss';

export default function Content() {

  return (
    <div className="container main-container"> 
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
