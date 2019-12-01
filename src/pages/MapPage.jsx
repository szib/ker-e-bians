import React from 'react';
import './Map.css';

import useParkingSpots from '../hooks/useParkingSpots';
import useRouteWithPath from '../hooks/useRouteWithPath';

import Position from '../lib/Position';
import Map from '../components/Map/Map';
import AppBar from '../components/AppBar/AppBar';

// import pathData from './hooks/path.json';

// Center location
// 51.536388, -0.140556
const center = new Position(51.530749, -0.129642);
const startCoord = new Position(51.554315, -0.093303)
const params = {
  latitude: center.lat,
  longitude: center.long,
  distance: 0.25,
  reason: ''
};

const routeRarams = {
  startLat: startCoord.lat,
  startLong: startCoord.long,
  endLat: center.lat,
  endLong: center.long,
  distance: 0.25,
  reason: ''
};

function changeDistance(distance) {
  params.distance = distance * 0.001;
  routeRarams.distance = distance * 0.001;
  // console.log(params.distance)
  // console.log(distance)
}

function changeCheckboxes(name, value) {
  if (!value) {
    if (name === params.reason) {
      params.reason = '';
      routeRarams.reason = '';
    }
  } else {
    params.reason = name;
    routeRarams.reason = name;
  }
}

const MapPage = () => {
  const api = useParkingSpots({ params });
  const apiPath = useRouteWithPath({ routeRarams });
  const [{ data, error, getCoordinates }, execute] = api;
  const [{ data: pathData, error: pathError }, executePath] = apiPath;

  if (error || pathError) return <div>Error...</div>;

  const coords = getCoordinates(data);

  return (
    <>
      <Map center={center} parkingCoords={coords} path={pathData} />
      <AppBar
        handleChangeDistance={changeDistance}
        refreshHandler={execute}
        refreshPathHandler={executePath}
        handleCheckboxChange={changeCheckboxes}
      />
    </>
  );
};

export default MapPage;
