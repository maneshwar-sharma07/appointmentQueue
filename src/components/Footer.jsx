import React from 'react'
import {MapPinHouse} from 'lucide-react'
import {Phone} from 'lucide-react'
import {Mail} from 'lucide-react'
const Footer = () => {
  return (
    <div className='footer'>
        <div class="footer-container">
    <div class="footer-col">
      <h3>HealthCare+</h3>
      <p>
        Providing trusted medical care with experienced doctors and
        modern facilities. Book appointments easily and securely.
      </p>
    </div>

    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Book Appointment</a></li>
        <li><a href="#">Doctors</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Our Services</h4>
      <ul>
        <li>Dental Care</li>
        <li>Eye Examination</li>
        <li>General Checkup</li>
        <li>Pediatric Care</li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Contact Us</h4>
      <p><MapPinHouse size={15} color="#fcfcfd" /> Adarsh Colony, Pathankot</p>
      <p><Phone size={15} color="#fcfcfd" /> +91 9478922753</p>
      <p><Mail size={15} color="#fcfcfd" /> maneshwar.sharma07@gmail.com</p>
    </div>

  </div>
  <div class="footer-bottom">
    <p>© 2026 HealthCare+. All rights reserved.</p>
  </div>
    </div>
  )
}

export default Footer