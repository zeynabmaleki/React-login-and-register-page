import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './css/App.css';
import Register from './components/Register';
import LogIn from './components/LogIn';
import SideBar from './components/SideBar';

function App() {
  const [formStyle, setFormStyle] = useState('defaultStyle');

  const handleFormStyleChange = (style) => {
    setFormStyle(style);
  }


  return (
    <Router>
      <div className='app-container'>
        <SideBar onStyleChange={handleFormStyleChange} />
        <Routes>
          <Route path="/" element={<LogIn formStyle={formStyle} />} />
          <Route path="/register" element={<Register formStyle={formStyle}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
