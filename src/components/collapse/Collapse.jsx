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
        <>
          {props.content_apropos && (
            <div className='collapse_apropos'>
              <p>{props.content_apropos}</p>
            </div>
          )}
          {props.content && (
            <div className='description_logements'>
              <p>{props.content}</p>
            </div>
          )}
          {props.equipement && (
            <div className='collapse-equipment'>
              <ul>
                {props.equipement.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
      
    </div>
    
  )
}

export default Collapse
