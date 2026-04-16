import React from 'react'
import {Hospital} from 'lucide-react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
           <div className='nav'>
            <div className='nav-left'>
                <Hospital color="#2b599f" />
                <h1>Harmony Family Clinic</h1>
            </div>
            <div className='nav-right'>
                 <Link to='/'>Home</Link>
                 <Link to='/about'>About</Link>
                 <Link to='/services'>Services</Link>
                 <Link to='/contact'>Contact</Link>
               <button>For Staff</button>
            </div>
           </div>
    </div>
  )
}

export default Navbar