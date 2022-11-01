// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";





function App() {
  const [alert, setAlert] = useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1000);
//phle alert null tha ab alert ek object hai   

}

  const [mode, setMode] = useState('light');
 const toggleMode=()=>{



  if(mode==='light')
  {setMode('dark');
document.body.style.backgroundColor='#042743';
showAlert("dark mode enabled","success");
// setInterval(() => {
//   document.title="hello"
// }, 1500);
// setInterval(() => {
//   document.title="kuch likho"
// }, 1000);


}
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode enabled","success");
  }
 }
   return (
   <>
   {/* <Router> */}
   {/* <Navbar title="happy" hey="hello"/> */}
   <Navbar title="text-utils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
{/* <Routes> */}
          {/* <Route exact path="/About" element={<About/>}> */}
            {/* <About /> */}
          {/* </Route> */}
         
          {/* <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Enter your text to analyse"  mode={mode}/>   */}
            {/* }> */}
            <TextForm showAlert={showAlert} heading="Enter your text to analyse"  mode={mode}/>
          {/* </Route> */}
        {/* </Routes> */}
        </div>
{/* </Router>  */}
     
   </>
  );
}

export default App;
