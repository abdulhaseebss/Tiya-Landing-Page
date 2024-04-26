import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Navbar2 from '@/components/Navbar2'


const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default Router