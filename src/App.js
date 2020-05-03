import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Head,Foot} from './Head.js';
import GridForm from './GridForm';

function App() {
  return (
    <div>
        <Head/>
        <GridForm className="app"/>
        <Foot/>
    </div>
  );
}

export default App;
