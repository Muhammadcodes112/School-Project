import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/footer'

function App() {

  return (
    <>
    <Navbar/>
    
    <Routes>
        <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
