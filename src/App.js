import './App.css';
import { Route, Routes } from "react-router-dom"
import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
