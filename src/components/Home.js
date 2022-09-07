import React from 'react'
import Header from './Header.js';
import Myself from './Myself.js';
import ProfileLinks from './ProfileLinks.js';
import Skills from './Skills.js';
import { useNavigate } from 'react-router-dom';

function Home({dataParentToChild}) {

  
  const navigate = useNavigate();


  const changeState = (childdata) => {    
    
    if(childdata==='home' )
    navigate("/");
    if(childdata==='feedback')
    navigate("/feedback");
    if(childdata==='token')
    navigate("/token"); 
  }

  
  return (
    <div>
        <Header changeState={changeState}/>

        

        <Myself/>

        <ProfileLinks/>

        <Skills/>
    </div>
  )
}

export default Home