import "./App.css"

import Nav from "./Nav"
import Hero from "./Hero"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import ContactForm from "./ContactForm"

function App() {
    return (
        <div className="App">
            <Nav />
            <Hero />
            <Projects />
            <About />
            <Contact />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default App
