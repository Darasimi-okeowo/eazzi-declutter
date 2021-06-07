import React from 'react'
import './App.css'
import Top from '../src/nav/top'
import Sect1 from '../src/Sect1/Sect1'
import Sect2 from '../src/Sect2/Sect2'
import Slideshow from '../src/slideshow/Slide'
import Footer from '../src/footer/footer'
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Top />
      </Router>
      <Sect1 />
      <Slideshow />
      <div>
        <h4 className='sect4'>Buy Fridge</h4>
      </div>
      <Sect2 />
      <Footer />
    </div>
  )
}

export default App
