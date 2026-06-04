import './Navbar.css'

function Navbar() {
  //const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>Freed</h1>
      </div>
      <div className="nav-menu" id="navbarNav">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#faith">Faith</a></li>
          <li><button type="button" className="join-button">Join waitlist</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;