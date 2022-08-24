import './Header.css';

export default function Header() {
  return (
    <header>
      <h2>Joshua Toguri</h2>
      <nav className="site-nav">
        <ul className="nav-list">
          <li className = "nav-item" ><a href="#About">About</a></li>
          <li className = "nav-item" ><a href="#Projects">Projects</a></li> 
          <li className = "nav-item" ><a href="#Skills">Skills</a></li> 
          <li className = "nav-item" ><a href="#Contact">Contact</a></li> 
        </ul>
      </nav>
    </header>
  )
}
