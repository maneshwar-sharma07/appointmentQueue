import React from 'react'
import {Folder} from 'lucide-react'
import {Clock} from 'lucide-react'
import WorkingTalk from './WorkingTalk'
const Working = () => {
  return (
    <div className='workingContainer'>
        <div className='working'>
             <h5>How It Works</h5>
             <p>We offer a range of healthcare services to meet your needs.</p>
             <div className='StepContainer'>
             <div className="workingStep">
                <span className='stepHeading'><Folder size={40} color="#33416c" />Select a Service</span>
                <span>Choose the type of service you need</span>
             </div>
             <div className="workingStep">
                <span  className='stepHeading'><Clock size={40} color="#33416c" />Pick a Date & Time</span>
                <span>Find a time that works for your schedule</span>
             </div>
             </div>
        </div>
<WorkingTalk/>

    </div>
  )
}

export default Working