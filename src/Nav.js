// import { HashLink } from "react-router-hash-link"
import './App.css';
const Nav = (props) => {
    return (
        <div className='Nav' id='Nav'>
            <div className='nav-container'>
                <div className='links-box'>
                    <p>
                           <a href= "#">Home</a>
                    </p>
                    <p>
                           <a href= "#">Projects</a> 
                    </p>
                    <p>
                           <a href= "#">About</a> 
                    </p>
                    <p>
                           <a href= "#">Contact</a> 
                    </p>
                    {/* <p>
                        <HashLink smooth to="#">
                            Home
                        </HashLink>
                    </p>
                    <p>
                        <HashLink smooth to="#projects">
                            Projects
                        </HashLink>
                    </p>
                    <p>
                        <HashLink smooth to="#about">
                            About
                        </HashLink>
                    </p>
                    <p>
                        <HashLink smooth to='#contact'>
                            Contact
                        </HashLink>
                    </p> */}
                </div>
            </div>
        </div>
    )
}
export default Nav