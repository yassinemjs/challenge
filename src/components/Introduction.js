import React from 'react'

export default function Introduction(props) {
    
    const {creation , imgReal} = props;

    return (
        <section id="intro-section" className="separation">
      <h2>
    Hello , i am <span className="text-important">{creation}</span> , <br />
        and i made GAME OF THRONES serie
      </h2>
      <img src= {imgReal} alt= {creation} width ={300} height ={350} />
    </section>
    )
}
