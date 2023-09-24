import React, { useState, useRef } from 'react';
import Header from './Header.js';
import Myself from './Myself.js';
import ProfileLinks from './ProfileLinks.js';
import Carousol from './Carousol.js';

import { useNavigate } from 'react-router-dom';
import Skilldescription from './Skill_Description.js';
import Documents from './Documents.js';
import Footer from './Footer.js';

import "./footer.css";

function Home({dataParentToChild}) {

  const carousolRef = useRef();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useNavigate();


  const changeState = (childdata) => {    
    console.log(childdata)
    if(childdata==='home' )
    navigate("/");
    if(childdata==='skills' )
    { 
      carousolRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if(childdata==='feedback')
    navigate("/feedback");
    if(childdata==='token')
    navigate("/token"); 
  }

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };
  
  return (
    <div class='container'>
      <Header changeState={changeState}/>        

      <Myself/>

      <ProfileLinks/>

      <div ref={carousolRef}>
        <Carousol  onImageClick={handleImageClick}/>
      </div>        

      <Skilldescription selectedIndex={selectedIndex} />

      <Documents/>

      <div class="footer_home">
        <Footer/>
      </div>

      


    </div>
  )
}

export default Home