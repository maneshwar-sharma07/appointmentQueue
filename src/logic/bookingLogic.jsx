import Doctors from '../data/Doctors'
const appointments=JSON.parse(localStorage.getItem("appointments"))||[]
function timeToMinutes(time){
    const[hours,minutes]=time.split(":").map(Number);
    return hours*60+minutes;
}
 export function getAvailableDoctors(service,date,startTime){
 const start=timeToMinutes(startTime);
 const end=start+30;
 const eligibleDoctors=Doctors.filter((doctor)=>
    doctor.services.includes(service)
 );
 const availableDoctors= eligibleDoctors.filter((doctor)=>{
         const hasConflict=appointments.some((appointment)=>{
            if(appointment.doctorId!==doctor.doctorId|| appointment.date!==date||appointment.status!=='booked'){
                return false;
            }
            const bookedStart=timeToMinutes(appointment.startTime);
            const bookedEnd=timeToMinutes(appointment.endTime);
            return start<bookedEnd&&end>bookedStart;
         });
         return !hasConflict;
 })
 return availableDoctors;
}
export function bookAppointment(doctorId,service,date,startTime){
    const start=timeToMinutes(startTime);
    const end=start+30;

    const conflictExist=appointments.some((appointment)=>{
            if(appointment.doctorId!==doctorId|| appointment.date!==date||appointment.status!=='booked'){
                return false;
            }
            const bookedStart=timeToMinutes(appointment.startTime);
            const bookedEnd=timeToMinutes(appointment.endTime);
            return start<bookedEnd&&end>bookedStart;
         });
         if(conflictExist){
             return{
                success:false,
                message:"Doctor not available at this time"
             }
         }
         const newAppointment={
            appointmentId:appointments.length+1,
            doctorId,
            service,
            date,
            startTime,
            endTime:`${Math.floor(end/60).toString().padStart(2,"0")}:${(end%60).toString().padStart(2,"0")}`,
            status:'booked'
         };
         appointments.push(newAppointment);
         localStorage.setItem("appointments",JSON.stringify(appointments));
         return{
            success:true,
            appointment:newAppointment
         };
}