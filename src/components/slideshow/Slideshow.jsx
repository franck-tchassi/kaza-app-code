import React from 'react'
import  './slideshow.scss'
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

const Slideshow = (props) => {
  return (
    <div className='slider-container'>
         <img src={props.image} alt={props.title} />

        
          <div className='chevrons'>
              <div className='slider-left'>
                    {props.numberTotal > 1 && <BiChevronLeft className='chevron-icon'  onClick={props.left}/> }
              </div>
              
              <div className='slider-right'>
                    {props.numberTotal > 1 && <BiChevronRight className='chevron-icon' onClick={props.right}/> }
              </div>
          </div>
          

          <div className='slider-number'>
            {props.numberTotal === 1? "": <p><span>{props.currentIndex}/</span>{props.numberTotal}</p> }
          </div>
    </div>
    
  )
}

export default Slideshow
