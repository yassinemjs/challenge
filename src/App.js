import React from 'react'
import NavBar from './components/NavBar'
import Introduction from './components/Introduction'
import ListeEpisodes from './components/ListeEpisodes'
import Formulaire from './components/Formulaire'
import Footer from './components/Footer'
import realisateur from './img/realisateur.jpg'
import './App.css';

const navlinks =[
{
  text : 'About',
  href : '#about'
},
{
  text : 'Projects',
  href : '#projects'
},
{
  text : 'Contact',
  href : '#contact'
},
{
  text :'Source',
  href :'#source'
}
]
const name ="Game of Thrones"
const real = "david Benioff" 
const txt ="GOT : Winter is Coming "

function App() {
  return (
    <div className="App">
      <NavBar  navlinks ={navlinks}  name={name}/>
      <Introduction creation ={real} imgReal ={realisateur}  />
      <ListeEpisodes />
      <Formulaire />
      <Footer finality ={txt} />

    </div>
  );
}

export default App;
