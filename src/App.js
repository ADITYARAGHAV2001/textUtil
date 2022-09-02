// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Routes} 
        from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');//whether dark Mode is enabled or not
  const [alert, setAlert] = useState(null);//whether dark Mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }

  const toggleModeBlue = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Blue Dark mode has been enabled", "success");
    }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled", "success");
  }}
  

  const toggleModeGreen = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1d4030';
      showAlert("Green Dark mode has been enabled", "success");
    }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled", "success");
  }
  }

  const toggleModeRed = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#52181e';
      showAlert("Red Dark mode has been enabled", "success");
    }
     
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled", "success");
  }
    
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen} toggleModeRed={toggleModeRed} />
      <Alert alert={alert} />

      <div className="container my-3">
 
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          {/* <Route exact path="/" element={} /> */}
            </Routes>
            <Textform heading="Enter text to analyze Below " showAlert={showAlert} mode={mode} />
      
      </div>
      </BrowserRouter>

    </>
  );
}

export default App;
