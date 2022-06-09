import Nav from './Nav';
import Socials from './Socials';

import josh from '../assets/images/josh.png';

import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <img src={josh} alt="Josh headshot"/>
      <h1>Joshua Toguri</h1>
      <p>Software Developer | Something Else | Something Else</p>
      
      <Nav />
      <Socials />
    </div>
  )
}
