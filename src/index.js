import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import Navbar from './modules/shares/Navbar';
import MyLandingPage from './modules/components/MyLandingPage';
import About from './modules/components/About';
import Error from './modules/components/Error/Error';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<MyLandingPage/>}> </Route>
      <Route path = 'aboutus' element = {<About/>}> </Route>
      <Route path = '*' element = {<Error/>}> </Route>
        
    </Routes>
    </BrowserRouter>
    
    
    
  </React.StrictMode>
);
