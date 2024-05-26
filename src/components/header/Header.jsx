import React, { useState } from 'react'
import kosa from '@images/kosa.png'
import { Link, useLocation } from 'react-router-dom'
import '@header/header.scss'

const Header = () => {
  const location = useLocation();
  return (
    <div className='header'>
      <div className='logo'>
          <img src={kosa} alt='image de kasa'/>
      </div>
      <nav className='navbar'>
          <ul>
              <Link to='/'><li className={location.pathname === '/' ? 'active' : ''}>Accueil</li></Link>
              <Link to='apropos'><li className={location.pathname === '/apropos' ? 'active' : ''}>A Propos</li></Link>
          </ul>
      </nav>
    </div>
  )
}

export default Header
