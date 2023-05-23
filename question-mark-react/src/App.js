import './App.css';
import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home/Home'
import User from './components/User/User' 
import Navbar from './components/Navbar/Navbar' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path= "/users/:userId"  element = {<User/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
