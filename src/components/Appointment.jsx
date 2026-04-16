import React from 'react'

const Appointment = () => {
  return (
    <div className='MissionSection'>
        <span className='AppointmentHeading'>Book An Appointment</span>
        <p className='AppointmentSubHeading1'>Trusted doctors | Instant Confirmation | Secure Booking</p>
        <p className='AppointmentSubHeading2'>Choose a service, pick a time and book with verified specialists</p>
        <div className='AppointmentGuide'>
            <div className='AppointmentSteps'>
            <span className='number'>1</span>
            <span className='StepsName'>Select Service</span>
            </div>
             <div className='AppointmentSteps'>
            <span className='number'>2</span>
            <span className='StepsName'>Check Availability</span>
            </div>
             <div className='AppointmentSteps'>
            <span className='number'>3</span>
            <span className='StepsName'>Book Instantly</span>
            </div>
           
        </div>
    </div>
  )
}

export default Appointment