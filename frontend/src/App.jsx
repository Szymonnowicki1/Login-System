import { useState } from 'react';
import Login from './components/login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './components/register';
import Home from './components/home';



function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
