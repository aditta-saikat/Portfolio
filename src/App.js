import React from 'react';
import './App.css';
import About from './Component/about/About';
import Contact from './Component/contact/Contact';
import Footer from './Component/footer/Footer';
import Header from './Component/header/Header';
import Home from './Component/home/Home';
import Qualification from './Component/qualification/Qualification';
import ScrollUp from './Component/scrollup/ScrollUp';
import Services from './Component/services/Services';
import Skills from './Component/skills/Skills';
import Testimonial from './Component/testimonial/Testimonial';
import Work from './Component/work/Work';

function App() {
  return (
    <>
    <Header/>

    <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Qualification/>
    <Testimonial/>
    <Work/>
    <Contact/>
    
    </main>
    <Footer/>
    <ScrollUp/>
    
    </>
  );
}

export default App;
