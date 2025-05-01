import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'
import adminPageLogo from '../../assets/adminPageLogo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={adminPageLogo} alt="" className="nav-logo" />
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar