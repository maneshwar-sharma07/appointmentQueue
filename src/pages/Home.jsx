import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Homehero from '../components/Homehero.jsx'
import Services from '../components/Services.jsx'
import Features from '../components/Features.jsx'
import Working from '../components/Working.jsx'
import ProvidedServices from '../components/ProvidedServices.jsx'
import Footer from '../components/Footer.jsx'
const Home = () => {
  return (
    <div>
         <Navbar/>
      <Homehero/>
       <Services/>
       <Features/>
       <ProvidedServices/>
         <Working/>
<Footer/>
     
    </div>
  )
}

export default Home