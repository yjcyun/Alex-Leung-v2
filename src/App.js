import React from 'react';
import Home from './components/Home';
import './index.css';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <SocialLinks />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;