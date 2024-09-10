import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Avaliacao from './components/Avaliacao';
import Sobre from './components/Sobre';
import Game from './components/Game';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <>
      <Router>
        <title>Binary Game</title>
        <NavBar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/avaliacao' element={<Avaliacao/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
