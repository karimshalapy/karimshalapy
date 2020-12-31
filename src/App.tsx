import React, { useEffect } from 'react';
import About from './components/sections/About/About';
import Contact from './components/sections/Contact/Contact';
import Hero from './components/sections/Hero/Hero';
import Work from './components/sections/Work/Work';
import Layout from './Layout/Layout';
import ScrollReveal from 'scrollreveal'

const App = () => {
  useEffect(() => {
    ScrollReveal().reveal(".fade-down", { interval: 50, origin: "top", distance: "10px", easing: "ease-in" })
    ScrollReveal().reveal(".fade-up", { interval: 50, viewFactor: 0.25, origin: "bottom", distance: "50px", delay: 200, easing: "ease-in" })
    ScrollReveal().reveal(".fade-up-delayed", { interval: 50, origin: "bottom", distance: "10px", easing: "ease-in", delay: 750 })
    ScrollReveal().reveal(".fade")
    ScrollReveal().reveal(".fade-delayed", { interval: 200, delay: 1400 })
  }, [])
  return (
    <div className="App">
      <Layout>
        <Hero />
        <About />
        <Work />
        <Contact />
      </Layout>
    </div>
  )
}

export default App;
