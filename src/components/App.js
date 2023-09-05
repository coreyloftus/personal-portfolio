import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Skills from "./Skills"
import Work from "./Work"
import { useLocation } from "react-router-dom"


function App() {

const location=useLocation()
const queryParams = new URLSearchParams(location.search)

  return (
    <div className="dark:bg-gray-900 bg-gray-100">
      <div className="dark:bg-red-900/40">
        <Navbar />
        <Home />
        {/* <div
          className={`${isVisible ? "fade-up" : "opacity-0"}`}
          ref={aboutRef}
        > */}
        <About />
        {/* </div> */}

        <Skills />

        <Work />

        <Contact />

        <Footer />
      </div>
    </div>
  )
}

export default App
