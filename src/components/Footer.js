import React from 'react'


export default function footer(props) {
 
    const {finality} = props ;

    return (
        <div>
        <p className="text-center">{finality}</p>
           
        </div>
    )
}
