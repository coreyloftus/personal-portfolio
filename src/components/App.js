import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Skills from "./Skills"
import Work from "./Work"
import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.5 })
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)
  const footerRef = useRef(null)
  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])
  return (
    <div className="dark:bg-gray-900 bg-gray-100">
      <div className="dark:bg-red-900/40">
        <Navbar />
        <Home />
        <About
          className={`${isVisible ? "fade-up" : "opacity-0"}`}
          ref={aboutRef}
        />
        <Skills
          className={`${isVisible ? "fade-up" : "opacity-0"}`}
          ref={skillsRef}
        />
        <Work
          className={`${isVisible ? "fade-up" : "opacity-0"}`}
          ref={workRef}
        />
        <Contact
          className={`${isVisible ? "fade-up" : "opacity-0"}`}
          ref={contactRef}
        />
        <Footer
          className={`${isVisible ? "fade-up" : "opacity-0"}`}
          ref={footerRef}
        />
      </div>
    </div>
  )
}

export default App
