import React from 'react'

export default function Episode(props) {
 
  const {pack : { image , description , clef , refer}  } = props ;
  
  return (
    <div className="project-card">
          <img src={image} alt={refer} />
          <p>
            {description}
          </p>
          <p>{clef} <a href="/">{refer}</a></p>
        </div>
  )
}






