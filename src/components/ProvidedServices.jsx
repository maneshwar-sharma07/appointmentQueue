import React from 'react'
import {HeartPlus} from 'lucide-react'
import {Stethoscope} from 'lucide-react'
import {Syringe} from 'lucide-react'
import {ClipboardMinus} from 'lucide-react'
const ProvidedServices = () => {
  return (
    <div className='ServicesDisplayContainer'>
        <span>Our Services</span>
        <p>We offer a range of healthcare services to meet your needs.</p>
        <div className='serviceContainer'>
            <div className="service">
                <span><HeartPlus size={40} color="#264192" />General Checkup</span>
                <p>Routine health checkups to monitor your overall health and prevents illness</p>
                <button className='bookConsultationBtn' onClick={()=>{
                    document.getElementById("book-appointment-section").scrollIntoView({behaviour:"smooth"});
                }}>Book Consultation</button>
            </div>
            <div className="service">
                <span><Stethoscope size={40} color="#264192" />Pediatric Care</span>
                <p>Gentle and expert medical care for infants, children and adolescents.</p>
                <button className='bookConsultationBtn' onClick={()=>{
                    document.getElementById("book-appointment-section").scrollIntoView({behaviour:"smooth"});
                }}>Book Consultation</button>
            </div>
            <div className="service">
                <span><Syringe size={40} color="#264192" />Dental Care</span>
                <p>Comprehensive dental checkups and treatments to keep your teeth and gums healthy.</p>
                <button className='bookConsultationBtn' onClick={()=>{
                    document.getElementById("book-appointment-section").scrollIntoView({behaviour:"smooth"});
                }}>Book Consultation</button>
            </div>
            <div className="service">
                <span><ClipboardMinus size={40} color="#264192" />Eye Examinations</span>
                <p>Comprehensive eye exams to check vision, eye health, and detect problems early.</p>
                <button className='bookConsultationBtn' onClick={()=>{
                    document.getElementById("book-appointment-section").scrollIntoView({behaviour:"smooth"});
                }}>Book Consultation</button>
            </div>
        </div>
    </div>
  )
}

export default ProvidedServices