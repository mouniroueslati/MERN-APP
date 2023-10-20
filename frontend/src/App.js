import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Pdca from './Pages/Pdca';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Footer from './Components/Footer';
import Logout from './Pages/Logout';
import NouvelleAction from './Pages/NouvelleAction';
import ScoreCard from './Pages/ScoreCard';
import Reporting from './Pages/Reporting'
import Graphique from './Pages/Graphique';



function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
       
          
           <Route path='/' element={<Home/>}/>
           <Route path='/reporting' element={<Reporting/>}/>
           <Route path='/scorecard' element={<ScoreCard/>}/>
           <Route path='/pdca' element={<Pdca/>}/>
           <Route path='/logout' element={<Logout/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path='/nouvelleaction' element={<NouvelleAction/>}/>
           <Route path='/graphiques' element={<Graphique/>}/>

        
      </Routes>
      </BrowserRouter>
    
      <Footer/>
    </div>
    
  );
}

export default App;
