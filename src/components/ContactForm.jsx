import React,{useState} from 'react'

const ContactForm = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Message, setMessage] = useState("")
  return (
    <div className='contactForm'>
        <span>Contact Form</span>
        <div>
            <span>Name</span>
            <input onChange={(e)=>{
               setName(e.target.value)
            }} value={Name} type='text' placeholder='Enter your name'></input>
        </div>
         <div>
            <span>E-Mail Address</span>
            <input onChange={(e)=>{
               setEmail(e.target.value)
            }} value={Email}  type='email' placeholder='Enter your E-Mail'></input>
        </div>
         <div>
            <span>Phone Number</span>
            <input onChange={(e)=>{
               setPhone(e.target.value)
            }} value={Phone}  type='number' placeholder='Enter your Phone Number'></input>
        </div>
         <div>
            <span>Message</span>
            <textarea onChange={(e)=>{
               setMessage(e.target.value)
            }} value={Message}  type='text' placeholder='Please Leave Your Message Here!'></textarea>
        </div>
        <button onClick={()=>{
            alert("Your Message has been Sent");
            setName("");
            setEmail("");
            setMessage("");
            setPhone("");
        }}>Send Message</button>
    </div>
  )
}

export default ContactForm