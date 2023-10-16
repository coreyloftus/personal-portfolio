import About from "./SEPage/About"
import Contact from "./SEPage/Contact"
import Footer from "./SEPage/Footer"
import Home from "./SEPage/Home"
import Navbar from "./SEPage/Navbar"
import Skills from "./SEPage/Skills"
import Work from "./SEPage/Work"
import Theater from "./Theater"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"

function SEPage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

function TheaterPage() {
  return (
    <>
      <Theater />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="dark:bg-gray-900 bg-gray-100">
        <div className="dark:bg-red-900/40">
          <Routes>
            <Route path="/" element={<SEPage />} />
            <Route path="/theater" element={<TheaterPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
