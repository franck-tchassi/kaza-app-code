import React from 'react'
import  './slideshow.scss'
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

const Slideshow = (props) => {
  return (
    <div className='slider-container'>
         <img src={props.image} alt={props.title} />

        
          
          <div className='slider-left'>
                {props.numberTotal > 1 && <BiChevronLeft  size={80} onClick={props.left}/> }
          </div>
          
          <div className='slider-right'>
                {props.numberTotal > 1 && <BiChevronRight size={80} onClick={props.right}/> }
          </div>
          

          <div className='slider-number'>
            {props.numberTotal === 1? "": <p><span>{props.currentIndex}/</span>{props.numberTotal}</p> }
          </div>
    </div>
    
  )
}

export default Slideshow
