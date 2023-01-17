import { HashLink as Link } from "react-router-hash-link"
const Nav = (props) => {
    return (
        <nav>  <div className='Nav' id='Nav'>
            <div className='nav-container'>
                <p className="initials">CL</p>
                <div className='links-box'>
                        <Link smooth to="/#">
                            Home
                        </Link>
                        <Link smooth to="/#projects">
                            Projects
                        </Link>
                        <Link smooth to="/#about">
                            About
                        </Link>
                        <Link smooth to='/#contact'>
                            Contact
                        </Link>
                  </div>
              </div>
          </div>
        </nav>
    )
}
export default Nav
