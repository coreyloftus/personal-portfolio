import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import Bio from './Bio';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
      <Bio />
      <Contact />
      <div className="stars star-1"></div>
      <div className="stars"></div>
    </div>
  );
}

export default App;
