import './App.css';
import { HashLink as Link } from 'react-router-hash-link'

// import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
       <nav>  <div className='Nav' id='Nav'>
            <div className='nav-container'>
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
        <Hero id="#" />
        <Projects />
        <About />
        <Contact />
    </div>
  );
}

export default App;
