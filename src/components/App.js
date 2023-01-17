import "../style/App.scss"
import { Route, Routes } from "react-router"

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
      {/* <Routes> */}
        <Nav />
        {/* <Route path="/" element={<Layout/>}></Route> */}
        <Hero />
        <Projects />
        <About />
        <Contact />
        <ContactForm />
        <Footer />
      {/* </Routes> */}
    </div>
  )
}

export default App