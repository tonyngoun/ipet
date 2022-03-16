import './App.css';
import React, {useEffect} from 'react';
import {Router} from '@reach/router';
import axios from 'axios';

import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';


function App() {
  return (
    <div className="App">
      <Router>
      <AllPets path="/home" />
      <NewPet path="/new" />
      <OnePet path="/pet/:id" />
      <EditPet path="/pet/edit/:id"/>




      </Router>
    </div>
  );
}

export default App;
