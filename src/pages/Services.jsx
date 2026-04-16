import React, { useState } from 'react'
import {ClipboardClock} from 'lucide-react'
import { getAvailableDoctors,bookAppointment } from '../logic/bookingLogic'
import Navbar from '../components/Navbar.jsx'
import Appointment from '../components/Appointment.jsx'
import Footer from '../components/Footer.jsx'
const Services = () => {
    const [service, setService] = useState("");
     const [date, setDate] = useState("")
      const [time, setTime] = useState("")
       const [availableDoctors, setAvailableDoctors] = useState([])
       
        const[uiMode,setUiMode]=useState("appointment");

const handleSearchAvailability=()=>{
    const doctors=getAvailableDoctors(service,date,time);
    if(doctors.length===0){
        alert('No Doctors Available At This Time');
        setAvailableDoctors([]);
    }else{
       
        setAvailableDoctors(doctors);
        setUiMode("doctors")
    }
};

const handleBookAppointments = (doctorId) => {
  if (!date) {
    alert("Please select a Date");
    return;
  }else if(!time){
     alert("Please select a Time");
    return;
  }else if(!service){
     alert("Please select a Service");
    return;
  }

  const result = bookAppointment(doctorId, service, date, time);

  if (!result.success) {
    setMessage(result.message);
  } else {
    alert("Appointment booked successfully!");
    setAvailableDoctors([]); 
    setUiMode("appointment");
   
  }
};

  return (
    <div>
      <Navbar/>
      <Appointment/>
        <div className='servicesContainer' id='book-appointment-section'>

  <div className='serviceCard'>
            <span>Choose a Service</span>
            <div className='serviceChoices'>
                <select value={service} onChange={(e)=>setService(e.target.value)}>
                    <option value='' disabled>Choose a service</option>
                    <option>General Consultation</option>
                    <option>General Checkup</option>
                    <option>Dental Care</option>
                </select>
                <input type='time' value={time} onChange={(e)=>setTime(e.target.value)}></input>
            </div>
            <input type='number' placeholder='Enter your Phone number'></input>
            <button className='searchBtn' onClick={handleSearchAvailability}>Search Availability</button>
        </div>
        <div className='serviceCard'>
            <span className='appointment'><ClipboardClock/>Appointment</span>
           <input type='date' className='appointmentDate'value={date} onChange={(e)=>setDate(e.target.value)}></input>
           <input type='time' className='appointmentTime'value={time} onChange={(e)=>setTime(e.target.value)}></input>
           
           </div>
          



{uiMode==='doctors'&&(
  <div className="doctorList">
    <h3>Available Doctors</h3>

    {availableDoctors.map((doctor) => (
      <div key={doctor.doctorId} className="doctorCard">
        <p><strong>{doctor.name}</strong></p>
        <p>{doctor.degree}</p>
           <input type='date' className='appointmentDate'value={date} onChange={(e)=>setDate(e.target.value)}></input>
        <button
          className="searchBtn"
          onClick={() =>{
          if(!date){
            alert("Please Choose a Valid Date");
            return;
          }
          handleBookAppointments(doctor.doctorId)
          } }
        >
          Book Appointment
        </button>
      </div>
    ))}
  </div>
)}

        </div>
      <Footer/>
    </div>
  )
}

export default Services