import React  from 'react'
import logo1 from "../assets/logo1.jpg"
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
       {/* NavBar */}
             <nav>
               <NavLink to="/home">
                 <img src={logo1}  alt="" className="logo" />
               </NavLink>
               <NavLink to="/home">
                 <span id="sp1"> Remedex</span>
               </NavLink>
               
               <ul className="nav-links">
                 <li>
                   <NavLink />
                   <NavLink to="/home">Home</NavLink>
                 </li>
                 <li>
                   <NavLink to="/about">About</NavLink>
                 </li>
                 <li>
                   <NavLink to="/remedies">Remedies</NavLink>
                 </li>
                 <li>
                   <NavLink to="/finddoc">Find a Doctor</NavLink>
                 </li>
                 <li>
                   <NavLink to="/feedback">Feedback</NavLink>
                 </li>
                 <li>
                   <NavLink to="/contact">Contact Us</NavLink>
                 </li>
                 <li>
                   <NavLink to="/login">Login / Singn Up</NavLink>
                 </li>

                 
               </ul>
             </nav>
    </div>
  )
}

export default Navbar
