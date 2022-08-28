import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './components/Home.js';
import Token from './components/Token';

function App() {
  const val ='zake kal'
  return (
    <div style={{marginTop:'1%'}}>
      <Router>
        <Routes >
          <Route exact path="/" element={<Home dataParentToChild={val}/>}/>
          <Route exact path="/token" element={<Token/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
