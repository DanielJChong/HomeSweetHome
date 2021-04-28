import './App.css';
import React from 'react';
import { Router } from '@reach/router';

import Home from './views/Home';
import AddRV from './views/AddRV';
import UpdateRV from './views/UpdateRV';
import RVDetail from './views/RVDetails';
import RenterDashboard from './views/RenterDashboard';
import ListerDashboard from './views/ListerDashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <RenterDashboard path ="/rv"/>
        <AddRV path="/rv/new"/>
        <UpdateRV path="/rv/:id/edit"/>
        <RVDetail path="/rv/:id"/>
        <ListerDashboard path="/rv/lister"/>
      </Router>
    </div>
  );
}

export default App;
