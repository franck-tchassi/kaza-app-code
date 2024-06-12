import React from 'react'
import '@footer/footer.scss'
import kasa from '@images/kosa-blanc.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer_content'>
        <img src={kasa}  alt='image de kasa' />
        <p>&copy;2020 Kasa. All rights reserved</p>
      </div>
      
    </div>
  )
}

export default Footer
