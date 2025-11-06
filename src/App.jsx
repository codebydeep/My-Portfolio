import React from 'react'
import Home from './pages/Home'
import SmoothFollower from './SmoothFollower'
import Footer from './pages/Footer'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div className='cursor-none'>
      <SmoothFollower />
      <Home />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
