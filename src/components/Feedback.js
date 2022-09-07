import React from 'react'
import Header from './Header.js';
import { useNavigate } from 'react-router-dom';

function Feedback() {
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
        feedback
    </div>
  )
}

export default Feedback