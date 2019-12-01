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
const center = new Position(51.536388, -0.140556);
const params = {
  latitude: center.lat,
  longitude: center.long,
  distance: 0.25,
  reason: ''
};

const routeRarams = {
  startLat: 51.53974253619081,
  startLong: 0.13928619720068192,
  endLat: 51.53946199880376,
  endLong: -0.1390471076674527,
  distance: 0.2,
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
