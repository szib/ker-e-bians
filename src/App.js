import React, { useEffect } from 'react';
import './App.css';

import useAxios, { configure } from 'axios-hooks';
import axios from './lib/axios';

import Position from './lib/Position';
import Map from './components/Map/Map';
import AppBar from './components/AppBar/AppBar';

// Center location
// 51.536388, -0.140556
const center = new Position(51.536388, -0.140556);

function App() {
  useEffect(() => {
    configure({ axios });
  }, []);

  const body = {
    latitude: center.lat,
    longitude: center.long,
    distance: 0.1
  };

  const [{ data: getData, loading: getLoading, error: getError }] = useAxios({
    url: '/parkingspots',
    params: body
  });

  return (
    <>
      <Map center={center} />;
      <AppBar />
    </>
  );
}

export default App;
