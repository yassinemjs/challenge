import React from 'react';
import Episode from './Episode' 
import execution from './execution.jpg' ;
import snow from './snow_kills_daenerys.jpg' ;
import dragon from './Dragons.jpg' ;
import red_wedding from './red_wedding.jpg' ;
import burning from './burning.jpg' ;
import james from './james_push_bran.jpg'



const handler = [ 
    {
        image : execution ,
        description :' Sansa Stark puts Petyr “Littlefinger” Baelish on trial at Winterfell and sentences him to death for his crimes. Arya carries out the sentence.',
        clef :'EXECUTION OF LITTLEFINGER', 
        refer :'sansa'
    } ,
    {
        image :james ,
        description :'Climbing a Winterfell tower, Bran Stark happens upon the queen, Cersei, having sex with her twin, Jaime. The latter pushes Bran from the tower hoping to permanently silence him.',
        clef :'JAIME PUSHES BRAN', 
        refer :'bran'
    } ,
    {
        image : snow ,
        description :' So it’s all come down to this. Eight seasons of following the adventures of the young Night’s Watch warrior and the Dragon Queen, worrying about their choices and the dread of what’s to come, feeling their heartbreak and pain, and witnessing their phoenix-like rebounds, only to have the one (Ice – not the sword) kill the other (Fire). And to punctuate the moment, Drogon melts down the Iron Throne.',
        clef :'SNOW KILLS DAENERYS', 
        refer :'snow'
    } ,
    {
        image : dragon ,
        description :' Daenerys Targaryen honors her dead husband with a king-size funeral pyre and places her dragon eggs alongside him, she adds the witch for a taste of vengeance, sets the lot on fire, then walks into the inferno. At daylight, Jorah Mormont and Rakharo approach the smoldering embers and find Daenerys, naked with three newly hatched dragons',
        clef :'DRAGONS', 
        refer :'dragon'
    } ,
    {
        image : red_wedding ,
        description :' Roose Bolton along with Walder Frey and his brood of murderers kill Robb and Talisa Stark, their unborn child, Catelyn Stark, and the Stark army.',
        clef :'RED WEDDING', 
        refer :'starck'
    } ,
    {
        image : burning ,
        description :' The Northern coalition led by Jon Snow and Grey Worm meet the Golden Company at the gates of King’s Landing. While they stare each other down, Daenerys has been busy blowing the Ironborn fleet to hell with dragon fire on Blackwater Bay. ',
        clef :'BURNING OF KING’S LANDING', 
        refer :'landing'
    }

]

export default function ListeEpisodes() {
    return (
     <div>
        <h2 className="text-important text-center">Episodes</h2>
        <div className="projects-container">
             { handler.map((el,i) => ( <Episode key={i} pack={el} /> ) )}
        </div>  
     </div>
    );
}
