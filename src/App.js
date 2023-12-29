// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import Bout from './components/Bout';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#4d246b";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"

    }
  }
  return (

    <>
        <Router>
          
            <Navbar title="TextUtils" mode={mode} togglemode={togglemode} aboutText="About" />
            <div className="container my-5">
          <Routes>
            <Route exact path='/' element={<TextForm heading="Enter text here" mode={mode} />}/>
            <Route path='/Bout' Component={Bout}/>
          </Routes>
          </div>
        </Router>
        </>
  );
}

export default App;
