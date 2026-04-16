import React from 'react'
import {Eye} from 'lucide-react'
import {Target} from 'lucide-react'
const AboutMission = () => {
  return (
    <div className='MissionSection'>
        <span className='MissionSectionHeading'>Our Mission & Vision</span>
        <p className='MissionSectionSubHeading'>We provide exceptional care and services tailored to meet our patient's needs.</p>
        <div className="MissionCardContainer">
            <div className="MissionCard">
                <Target color="#28478f" size={140} />
                <div className='MissionCardContent'>
                    <span>Our Mission</span>
                    <p>Providing affordable, accessible and high-quality healthcare to families in our community.</p>
                </div>
            </div>
             <div className="MissionCard">
                <Eye color="#28478f" size={140} />
                <div className='MissionCardContent'>
                    <span>Our Vision</span>
                    <p>To be the most trusted healthcare partner for families, ensuring their lasting health and well-being.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMission