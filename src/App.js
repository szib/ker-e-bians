import React from 'react';
import './App.css';

import Position from './lib/Position';
import Map from './components/Map/Map';
import AppBar from './components/AppBar/AppBar';

const center = new Position(51.5049375, -0.0964509);

function App() {
  return (
    <>
      <Map center={center} />;
      <AppBar />
    </>
  );
}

export default App;
