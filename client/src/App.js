import './App.css';
import React, {useEffect} from 'react';
import {Router} from '@reach/router';
import axios from 'axios';

import AllPets from './components/AllPets';
import NewPet from './components/NewPet';


function App() {
  return (
    <div className="App">
      <Router>
      <AllPets path="/home" />
      <NewPet path="/new" />



      </Router>
    </div>
  );
}

export default App;
