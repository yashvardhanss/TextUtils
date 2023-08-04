import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//React Router imported from react router website
import { Routes, Route } from "react-router-dom"

function App() {
  //whether dark mode is enabled or not
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#090101';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";

      //REPEATED TITLE CHANGE BY THIS FUNCTION setInterval()
      // setInterval( () => {
      //   document.title = 'TextUtils is Amazing tool';
      // }, 2000);
      // setInterval( () => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Home";
    }
  }

  const changeViolet = ()=>{
    document.body.style.backgroundColor = '#2C1046';
    showAlert("Violet theme has been enabled", "success");
    // document.title = "TextUtils - Violet Mode";
  }
  const changeOrange = ()=>{
    document.body.style.backgroundColor = 'orange';
    showAlert("Orange theme has been enabled", "success");
    // document.title = "TextUtils - Yellow Mode";
  }
  const changeRed = ()=>{
    document.body.style.backgroundColor = '#C15031';
    showAlert("Red theme has been enabled", "success");
    // document.title = "TextUtils - Red Mode";
  }


  return (
  <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} changeViolet={changeViolet} changeRed={changeRed} changeOrange={changeOrange}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          {/* using "exact" keyword before path is a "GOOD practice" */}
          <Route exact path='/about' element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try! TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}></Route>
        </Routes>
      </div>
  </>
  );
}

export default App;