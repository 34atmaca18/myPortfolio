import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { About } from './components/About'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='relative overflow-x-hidden h-fit bg-black'>
        <Navbar />
        <Main />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App