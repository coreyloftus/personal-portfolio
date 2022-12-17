import './App.css';
// import { Route } from 'react-router-dom'

import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Nav />
        <Hero />
        <Projects />
        <About />
        <Contact />
    </div>
  );
}

export default App;
