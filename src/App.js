import React from 'react';
import './App.css';

import Position from './lib/Position';
import Map from './Map/Map';
const center = new Position(51.5049375, -0.0964509);

function App() {
  return <Map center={center} />;
}

export default App;
