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
      document.body.style.backgroundColor="#4d246b";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white"

    }
  }
  return (

    <>
    <div className="shareer"style={{backgroundColor:mode==="dark"?"#4d246b":"white"}}>
      <Navbar title="Arnav Garg" mode={mode} togglemode={togglemode}/>
      <div className="container">
        <TextForm heading="Enter your analysed text" mode={mode}/>
      </div>
      </div>
    </>
  );
}

export default App;
