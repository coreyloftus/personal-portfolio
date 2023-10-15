import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Home from "./Home"
import Navbar from "./Navbar"
import Skills from "./Skills"
import Work from "./Work"
import Theater from "./Theater"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="dark:bg-gray-900 bg-gray-100">
        <div className="dark:bg-red-900/40">
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
          <Routes>
            <Route path="/theater" element={<Theater />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
