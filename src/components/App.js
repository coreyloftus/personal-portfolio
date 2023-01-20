import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Navbar from "./Navbar"
import Skills from "./Skills"
import Work from "./Work"
import {HashLink as Link} from 'react-router-hash-link'

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Work />
            <Contact />
        </div>
    )
}

export default App
