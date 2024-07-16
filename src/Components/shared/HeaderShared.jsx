import React from 'react'
import { Link } from 'react-router-dom'
import "../shared/styles/HeaderShared.css"
const HeaderShared = () => {
  return (
    <header className='header__shared'>
      <nav className='hs_nav1' >
        <h1><Link to= "/" className='header__shared-h1'>TravelingApp</Link></h1>
         <div className='hs_div'>
              <Link className='hs_div_a' to="/">Languaje</Link>
              <Link className='hs_div_a' to="/register">Register</Link>
              <Link className='hs_div_a' to="/login">Login</Link>
         </div >
      </nav>
        
            <ul className='hs-ul' >  
                <li ><Link className= "hs-ul-li" to="/reservations">Reservation</Link></li>
                <li ><Link className='hs-ul-li' to="/">About us</Link></li>
                <li ><Link className='hs-ul-li' to="/">Cities</Link></li>
                <li ><Link className='hs-ul-li' to="/">Turist Atractions</Link></li>
                
            </ul>
    </header>
  )
}

export default HeaderShared
