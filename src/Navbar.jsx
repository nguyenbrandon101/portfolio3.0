import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
const Navbar = () => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 941);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 941);
  };

  const navigate = useNavigate()
  function homeScreen() {
    navigate('/')
  }
  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div>
      {isDesktop ? (
      <div className='navbar'>
      <label for="toggle" className='hamburger'></label>
      <div class="topnav">
        <h1 onClick={homeScreen} className='logo'>BNguyen</h1>
        <Link className="nav-items" to='/proj'>Projects</Link>
        <Link className="nav-items" to='/contact'>Contact Me</Link>
        <div className='dot'></div>
        <div className='resbut'>
          <a href={require("./resume.pdf")} target="_blank" className='but-res'>Resume</a>
        </div>
        </div>
      </div>
      ) : (
        <nav>
        <div class="navbar">
          <div class="container nav-container">
              <input class="checkbox" type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>  
            <div class="logo2">
              <h1>BNguyen</h1>
            </div>
            <div class="menu-items">
              <Link className="nav-items" to="/">Home</Link>
              <Link className="nav-items" to='/proj'>Projects</Link>
              <Link className="nav-items" to='/contact'>Contact Me</Link>
              <Link className="nav-items">Resume</Link>
            </div>
          </div>
        </div>
      </nav>
      )}
    </div>
  )
}

export default Navbar