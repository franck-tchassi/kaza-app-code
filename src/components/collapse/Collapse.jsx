import React, { useState } from 'react'
import '@collapse/collapse.scss'
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const Collapse = (props) => {
  const [isOpen, setOpen]= useState(false)
  const handleClick = ()=>{
    setOpen(!isOpen)
  }

  return (
    <div className='collapse-container'>
      <div className='collapse'>
          <h2>
            {props.title}
          </h2>
          { isOpen ? 
              <div className='icon' onClick={handleClick}>
                <GoChevronDown />
              </div>
              
              :
              <div className='icon' onClick={handleClick}>
                <GoChevronUp />
              </div>
          }
      </div>
      {isOpen && (
          <div className='collapse-description'>
              <p>{props.description}</p>
          </div>
      )}
      {isOpen && ( 
          <div className='collapse-equipment'>
              <p>{props.equipement}</p>
          </div>
      )}
      
    </div>
    
  )
}

export default Collapse
