import React from 'react'
import './tags.scss'

const Tags = (props) => {
  return (
    <div className='tags-container'>
        
        {props.tags.map((tag, index) => (
            <div className='tags' key={index}>
              <p>{tag}</p>
            </div>
        ))}
        
    </div>
  )
}

export default Tags
