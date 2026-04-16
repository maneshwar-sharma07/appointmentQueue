import React from 'react'
import {Clock} from 'lucide-react'
import {Sheet} from 'lucide-react'
import{FileSpreadsheet} from 'lucide-react'
import {HeartPulse} from 'lucide-react'
const WhyChooseUs = () => {
  return (
    <div className='chooseUsContainer'>
        <span className='MissionSectionHeading'>Why Choose Us</span>
        <p className='MissionSectionSubHeading'>We provide exceptional care and services tailored to meet our patients needs</p>

        <div className='chooseUsCardContainer'>

            <div className='chooseUsCards'>
                  <div className="MissionCard">
                <Clock color="#28478f" size={140} />
                <div className='MissionCardContent'>
                    <span>24/7 Doctors Available</span>
                    <p>Round the clock access to expert medical care</p>
                </div>
            </div>
             <div className="MissionCard">
               <Sheet color="#28478f" size={140}/>
                <div className='MissionCardContent'>
                    <span>Easy Online Appointments</span>
                    <p>Seamlessly book your appointments online</p>
                </div>
            </div>
            </div>
             
  <div className='chooseUsCards'>
                  <div className="MissionCard">
                <FileSpreadsheet color="#28478f" size={140} />
                <div className='MissionCardContent'>
                    <span>Experienced & Certified Doctors</span>
                    <p>Highly qualified and compassionate medical professionals</p>
                </div>
            </div>
             <div className="MissionCard">
               <HeartPulse color="#28478f" size={140}/>
                <div className='MissionCardContent'>
                    <span>Patient-Centered Care</span>
                    <p>Personalized care focused on your well-being</p>
                </div>
            </div>
            </div>
             




        </div>
    </div>
  )
}

export default WhyChooseUs