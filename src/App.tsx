import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
