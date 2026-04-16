import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import ContactDetails from '../components/ContactDetails'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='contactSection'>
<ContactForm/>
<ContactDetails/>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact