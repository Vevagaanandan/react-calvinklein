import React, { useState } from 'react'
import Topbar from './Components/Topbar'
import Navbar from './Components/Navbar'
import FooterBottom from './Components/FooterBottom'
import Footer from './Components/Footer'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree'
import SectionFour from './Components/SectionFour'
import SectionFive from './Components/SectionFive'
import Newsletter from './Components/Newsletter'


function App() {

  return (
    <>
      <Navbar />

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Newsletter />

      <Footer />
      <FooterBottom />

    </>
  )
}

export default App
