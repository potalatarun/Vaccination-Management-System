import './App.css';
import Create from './components/Create.js';
import {BrowserRouter,Switch,Route,Routes, Link} from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';
import Lookup from './components/Lookup';
import { useState } from 'react';
function App() {
  return (
    <BrowserRouter>
     <div className='header'>
      <Link to={'/read'}><h2 className="main-header">Covid Management System</h2></Link>
      <Link to={'/create'}><h2 className="main-header" id='create'>Add User</h2></Link>
     </div>
      <div className="main">
      <div>
        <Routes> 
        <Route path="/create" element={<Create/>}/> 
        <Route path='/read' element={<Read/>}/>
        <Route path='/update' element={<Update/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}
export default App;
