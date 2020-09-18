import React from 'react';
import Header from '../src/components/Header';
import About from'../src/components/About';
import Projects from'../src/components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        </header>
        <Header />
        <About />
        <Projects />
      
      
    </div>
  );
}

export default App;
