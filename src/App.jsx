import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
        </Routes>
    </div>
  )
}
