import React, { useState } from 'react';
import Header from './Header.js';
import Myself from './Myself.js';
import ProfileLinks from './ProfileLinks.js';
import Carousol from './Carousol.js';


import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line
import Skilldescription from './Skill_Description.js';

function Home({dataParentToChild}) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();


  const changeState = (childdata) => {    
    
    if(childdata==='home' )
    navigate("/");
    if(childdata==='feedback')
    navigate("/feedback");
    if(childdata==='token')
    navigate("/token"); 
  }

  const handleImageClick = (index) => {

    console.log('Index received from child:', index);
    setSelectedIndex(index);

  };
  
  return (
    <div>
        <Header changeState={changeState}/>        

        <Myself/>

        <ProfileLinks/>


        <Carousol onImageClick={handleImageClick} />

        <Skilldescription selectedIndex={selectedIndex}/>
    </div>
  )
}

export default Home