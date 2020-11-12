import React from 'react'

export default function NavBar(props) {

    const {name ,navlinks}= props;
    return (
     <header className="separation">
        <h1>{name}</h1>
        <ul className="navmenu">
          {navlinks.map ((el,i) =>  <li><a href={el.href}>{el.text}</a></li> )}
        </ul>
      </header>
    )
}
