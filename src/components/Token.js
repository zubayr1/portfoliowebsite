import React from 'react'
import Header from './Header.js';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.js';

import "./footer.css";


function Token() {
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
        token

        <div class="footer">
          <Footer/>
        </div>
    </div>
  )
}

export default Token