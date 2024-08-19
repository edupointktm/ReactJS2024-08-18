import React from 'react'
import Home from '../Page/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Page/Contact'
import About from '../Page/About'
import Gallery from '../Page/Gallery'
import Page_not_found from '../Page/Page_not_found'

function Section() {
    return (
        <>
          
            
                <Routes>
                    <Route path="/" element={  <Home />}/ >
                    <Route path="/contact" element={  <Contact />}/ >
                    <Route path="/about" element={  <About />}/ >
                    <Route path="/gallery" element={  <Gallery />}/ >
                    <Route path="*" element={  <Page_not_found />}/ >
                </Routes>
           
        </>
    )
}

export default Section