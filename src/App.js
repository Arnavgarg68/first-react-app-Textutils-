// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name="Arnav Garg";
function App() {
  const [mode,setMode]=useState('light')
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      
    }
    else{
      setMode('light');
    }
  }
  return (

    <>
    <div className="shareer"style={{backgroundColor:mode==="dark"?"#00542e":"white"}}>
      <Navbar title="Arnav Garg" mode={mode} togglemode={togglemode}/>
      <div className="container">
        <TextForm heading="Enter your analysed text" mode={mode}/>
      </div>
      </div>
    </>
  );
}

export default App;
