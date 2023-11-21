import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Topbar from './components/topbar/Topbar';
import Portfolio from './components/portfolio/Portfolio'


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
