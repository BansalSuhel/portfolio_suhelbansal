import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import Logo from '../images/Logo.png'
import '../styles/Sidebar.css'

const Sidebar = () => {
  const openSidebar = () => {
    document.getElementById('navbar-nav').style.transform = 'translateX(0)'
  }

  const closeSidebar = () => {
    document.getElementById('navbar-nav').style.transform = 'translateX(100%)'
  }

  return (
    <>
      <div>
        <span className='menu-bar' onClick={openSidebar}>
          &#9776;
        </span>
      </div>

      <nav className='navbar' id='navbar-nav'>
        <Link to='#' onClick={closeSidebar} className='close-btn'>
          &times;
        </Link>
        <div className='navbar__logo'>
          <img src={Logo} alt='Logo' />
        </div>
        <NavLink to='/' onClick={closeSidebar} exact>
          Home
        </NavLink>
        <NavLink to='/about' onClick={closeSidebar}>
          About
        </NavLink>
        <NavLink to='/contact' onClick={closeSidebar}>
          Contact
        </NavLink>
        <NavLink to='/photos' onClick={closeSidebar}>
          Photos
        </NavLink>
        <NavLink to='/projects' onClick={closeSidebar}>
          Projects
        </NavLink>
        <NavLink to='/blogs' onClick={closeSidebar}>
          Blogs
        </NavLink>
        <p>Copyright &copy; Suhel Bansal</p>
      </nav>
    </>
  )
}

export default Sidebar
