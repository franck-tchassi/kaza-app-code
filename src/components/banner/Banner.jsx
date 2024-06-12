import React from 'react'
import mer from '@images/mer.jpg'
import '@banner/banner.scss'
import montagne from '@images/montagne.jpg'
import {useLocation} from 'react-router-dom'


const Banner = () => {
  const location = useLocation();
  return (
    <div className='banner'>
      {location.pathname==='/'? 
          <div className='mer'>
              <img src={mer} alt='image de la mer'/>
              <p>Chez vous, partout et ailleurs</p>
          </div> 
          : 
          " "
      }

      {location.pathname==='/apropos'? 
          <div className='montagne'>
               <img src={montagne} alt='image de montagne'/>
          </div> 
          : 
          " "
      }

      
    </div>
  )
}

export default Banner
