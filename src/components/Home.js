import React from 'react'
import Header from './Header.js';
import Myself from './Myself.js';
import ProfileLinks from './ProfileLinks.js';
import Skills from './Skills.js';

function Home() {
  return (
    <div>
        <Header />

        <Myself/>

        <ProfileLinks/>

        <Skills/>
    </div>
  )
}

export default Home