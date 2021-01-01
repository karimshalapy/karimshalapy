import React, { useEffect, useState } from 'react';
import About from './components/sections/About/About';
import Contact from './components/sections/Contact/Contact';
import Hero from './components/sections/Hero/Hero';
import Work from './components/sections/Work/Work';
import Layout from './Layout/Layout';
import ScrollReveal from 'scrollreveal'
import { animateScroll as Scroll, scroller, Events } from 'react-scroll'
import MainContext from './MainContext'
import { IProjectData } from './@types/Work';

const App = () => {
  const [data, setData] = useState<IProjectData[]>([])

  const setUpScrollReveal = () => {
    ScrollReveal().reveal(".fade-down", { interval: 50, origin: "top", distance: "10px", easing: "ease-in" })
    ScrollReveal().reveal(".fade-up", { interval: 50, viewFactor: 0.25, origin: "bottom", distance: "50px", delay: 200, easing: "ease-in" })
    ScrollReveal().reveal(".fade-up-delayed", { interval: 50, origin: "bottom", distance: "10px", easing: "ease-in", delay: 750 })
    ScrollReveal().reveal(".fade")
    ScrollReveal().reveal(".fade-delayed", { interval: 200, delay: 1400 })
  }
  const setUpScrollToHash = () => {
    const hash = window.location.hash.substr(1)
    //check if scroll is at the top
    if (window.scrollY !== 0) {//if not
      //scroll to top
      Scroll.scrollToTop()
      //then scroll to the hash after scrolling to top event ends
      if (hash) Events.scrollEvent.register("end", () => {
        scroller.scrollTo(hash, { smooth: true, isDynamic: true })
        Events.scrollEvent.remove("end")
      })
    } else {//if true
      //scroll to has with a timeout to give a window for scroll reveal to show the items
      setTimeout(() => scroller.scrollTo(hash, { smooth: true, isDynamic: true }), 100)
    }
  }
  const fetchData = () => {
    fetch("https://my-portfolio-dcec7-default-rtdb.firebaseio.com/projects.json")
      .then(res => res.json())
      .then((data: IProjectData[]) => {
        setData(data)
      })
  }
  useEffect(() => {
    fetchData()
    setUpScrollReveal()
    setUpScrollToHash()
  }, [])
  return (
    <div className="App">
      <MainContext.Provider value={{ projects: data }}>
        <Layout>
          <Hero />
          <About />
          <Work />
          <Contact />
        </Layout>
      </MainContext.Provider>
    </div>
  )
}

export default App;
