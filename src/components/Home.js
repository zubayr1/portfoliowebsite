import React from 'react'
import Header from './Header.js';
import Myself from './Myself.js';
import ProfileLinks from './ProfileLinks.js';

function Home() {
  return (
    <div>
        <Header />

        <Myself/>

        <ProfileLinks/>
    </div>
  )
}

export default Home