import React from 'react'
import AboutHero from '../components/AboutHero'
import Navbar from '../components/Navbar'
import AboutMission from '../components/AboutMission'
import WhyChooseUs from '../components/WhyChooseUs'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
       <AboutHero/>
       <AboutMission/>
       <WhyChooseUs/>
       <Footer/>
    </div>
  )
}

export default About