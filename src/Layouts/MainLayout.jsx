import React from 'react'
import Header from '../Components/Header/Header'
import '../Layouts/layout.scss'
import Marquee from '../Components/Marquee/Marquee'
import Footer from '../Components/Footer/Footer'
import Home from '../Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../Pages/Contact/ContactUs'

function MainLayout() {
  return (
   <>
   <Marquee/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default MainLayout
