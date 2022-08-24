//import Nav from './Nav';
import Socials from './Socials';

import josh from '../assets/images/josh.png';

//import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <img src={josh} alt="Josh headshot"/>
      <div className="personal">
        <h1>Joshua Toguri</h1>
        <p>Software Engineer</p> 
      </div>

    </div>
  )
}
