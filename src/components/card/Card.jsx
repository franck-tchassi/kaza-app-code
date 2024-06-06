import React from 'react'
import '@card/card.scss'
import { Link, useLocation } from 'react-router-dom'
import logement from '../../data/logements.json'


const Card = () => {
  const  location = useLocation();
  

  return (
    <div className='card-container'>
        {location.pathname==='/'&&
          
          (logement.map((logement)=>(
            //console.log(logement.id)
            
            <Link to={`/logement/${logement.id}`} className='card' key={logement.id}>

                <img src={logement.cover} alt={logement.title} />
                <h2>{logement.title}</h2>
                
            </Link>
            
          )))

        }
    </div>
  )
}

export default Card
