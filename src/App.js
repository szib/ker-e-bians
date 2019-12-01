import React from 'react';
import './App.css';

import useParkingSpots from './hooks/useParkingSpots';

import Position from './lib/Position';
import Map from './components/Map/Map';
import AppBar from './components/AppBar/AppBar';

// Center location
// 51.536388, -0.140556
const center = new Position(51.536388, -0.140556);
const params = {
  latitude: center.lat,
  longitude: center.long,
  distance: 0.25
};

function changeDistance(distance) {
  params.distance = distance*0.001
  console.log(params.distance)
  console.log(distance)
} 

function App() {
  const api = useParkingSpots({ params });
  const [{ data, error, getCoordinates }, execute] = api;

  if (error) return <div>Error...</div>;

  const coords = getCoordinates(data);

  return (
    <>
      <Map center={center} parkingCoords={coords} />
      <AppBar handleChangeDistance={changeDistance} refreshHandler={execute} />
    </>
  );
}

export default App;
