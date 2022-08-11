import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

import './scss/app.scss';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
