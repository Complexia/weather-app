import React from 'react';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './components/SearchBox';
import SearchHistory from './components/SearchHistory';
import ResultBox from './components/ResultBox';
function App() {
  
  return (
    <div className="container">
      <NavigationBar></NavigationBar>
      

      <SearchBox></SearchBox>

      

      
      
    </div>
    
  );
}

export default App;
