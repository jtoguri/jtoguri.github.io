import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <nav className="site-nav container">
        <h2>Joshua Toguri</h2>

        <ul className="nav-list">
          <li className = "nav-item" ><a className="nav-link" href="#Projects">Projects</a></li> 
          <li className = "nav-item" ><a className="nav-link" href="#Skills">Skills</a></li> 
          <li className = "nav-item" ><a className="nav-link" href="#Contact">Contact</a></li> 
        </ul>
      </nav>
    </header>
  )
}
