import React from 'react'
import { Clock3 } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { BellRing } from 'lucide-react';
import { CalendarSearch } from 'lucide-react';
const Features = () => {
    return (
        <div className='featuresContainer'>

            <div className='featuresCard'>
                <span><Clock3 size={40} color="#0a1c50"  /></span>
                <h5>Quick & Easy Booking</h5>
                <p>Schedule your appointments in just a few clicks.</p>
            </div>

            <div className='featuresCard'>
                <span><ShieldCheck size={40} color="#0a1c50"  /></span>
                 <h5>Secure & Private</h5>
                <p>Your personal information is protected and confidential.</p>
            </div>

            <div className='featuresCard'>
                <span><BellRing size={40} color='#0a1c50' /></span>
                 <h5>Appointment Reminders</h5>
                <p>Get email and SMS reminders for your upcoming visits.</p>
            </div>

            <div className='featuresCard'>
                <span><CalendarSearch size={40} color="#0a1c50" /></span>
                 <h5>Manage Your Appointments</h5>
                <p>View, reschedule or cancel your appointments anytime.</p>
            </div>

        </div>
    )
}

export default Features