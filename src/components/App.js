import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Skills from "./Skills"
import Work from "./Work"

function App() {
  return (
    <div className="dark:bg-[#32171a] bg-gray-100">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
