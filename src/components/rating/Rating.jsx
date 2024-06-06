import React, { useState } from 'react'
import '@rating/rating.scss'
import { FaStar } from "react-icons/fa";

const Rating = (props) => {
   const etoiles = [];
   
   for(let i=1; i<= 5; i++){
    let couleurEtoile = i <= props.rating ? "#FF6060" : "#E3E3E3";
    etoiles.push(<FaStar className='star' key={i} color={couleurEtoile} />);
   }
  
  return (
    <div className='rating-container'>

      <div>{etoiles}</div>
       
    </div>
  )
}

export default Rating
