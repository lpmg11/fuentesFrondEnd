import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="Prueba" element={<Index/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
