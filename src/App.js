import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
