// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Aabout from './components/Aabout';
import TextForm from './components/TextForm';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [alert,setAlert]=useState(null);
  const [mode, setMode] = useState('light');
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#4d246b";
      showAlert("Dark Mode enabled","success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode enabled","success")
      
    }
  }
  return (

    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} aboutText="About" />
      <Alert alert={alert}/>
      <div className="container my-5">
      <Routes>
      <Route path="/Aabout" element={<Aabout mode={mode} />} />
        <Route path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
      </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
