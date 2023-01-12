import "./App.css"

import Nav from "./Nav"
import Hero from "./Hero"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
