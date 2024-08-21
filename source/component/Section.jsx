import React from 'react'
import Home from '../Page/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Page/Contact'
import About from '../Page/About'
import Gallery from '../Page/Gallery'
import Page_not_found from '../Page/Page_not_found'
import LocalDB from '../Page/student/LocalDB'
import Student_details from '../Page/student/Student_details'
import Event_handling from '../Page/Event_handling'
import Hook from '../Page/Hook'

function Section() {
    return (
        <>
          
            
                <Routes>
                    <Route path="/" element={  <Home />}/ >
                    <Route path="/contact" element={  <Contact />}/ >
                    <Route path="/about" element={  <About />}/ >
                    <Route path="/gallery" element={  <Gallery />}/ >
                    <Route path="/localdb" element={  <LocalDB />}/ >
                    <Route path="/studentdetails/:std_id" element={  <Student_details />}/ >
                    <Route path="/eventhandling" element={  <Event_handling />}/ >
                    <Route path="/hook" element={  <Hook />}/ >
                    <Route path="*" element={  <Page_not_found />}/ >
                </Routes>
           
        </>
    )
}

export default Section