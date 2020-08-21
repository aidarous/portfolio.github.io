import React from 'react';
import Header from '../src/components/Header';
import About from'../src/components/About';
import Projects from'../src/components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header /> <br /><br />
        <About />
        <Projects />
      
      </header>
    </div>
  );
}

export default App;
