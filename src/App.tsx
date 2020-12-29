import React from 'react';
import About from './components/sections/About/About';
import Hero from './components/sections/Hero/Hero';
import Layout from './Layout/Layout';

const App = () => (
  <div className="App">
    <Layout>
      <Hero />
      <About />
    </Layout>
  </div>
)

export default App;
