import React, {useState} from 'react';
import './App.css';
import Sorting from './components/Sorting';
import Graph from './components/Graph';
import Searching from './components/Searching';
import SievePrime from './components/SievePrime';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if(mode === 'light'){  
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Sorting_Vis" element={<Sorting mode={mode}/>}/>
          <Route exact path="/Graph_Vis" element={<Graph mode={mode}/>}/>
          <Route exact path="/Search_Vis" element={<Searching mode={mode}/>}/>
          <Route exact path="/SievePrime_Vis" element={<SievePrime mode={mode}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
