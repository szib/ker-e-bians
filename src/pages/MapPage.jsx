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
var startCoord = new Position(51.555519, -0.089773);
var center = new Position(51.551251, -0.175297);
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

function changeStartLocation(event) {
  var name = event.target.value;
  if (name === '7 Stradbroke Rd') {
    startCoord = new Position(51.554315, -0.093303);
    routeRarams.startLat = startCoord.lat;
    routeRarams.startLong = startCoord.long;
  }
}

function changeEndLocation(event) {
  var name = event.target.value;
  console.log(name);
  if (name === '32 Ossulston St') {
    center = new Position(51.531424, -0.130364);
    routeRarams.endLat = center.lat;
    routeRarams.endLong = center.long;
    params.latitude = center.lat;
    params.longitude = center.long;
  }
}

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
  const [
    { data, error, getCoordinates, getNumberOfParkingSlots },
    execute
  ] = api;
  const [{ data: pathData, error: pathError }, executePath] = apiPath;

  if (error || pathError) return <div>Error...</div>;

  const coords = getCoordinates(data);
  const parkingSlots = getNumberOfParkingSlots(data);

  return (
    <>
      <Map
        center={center}
        startCoord={startCoord}
        parkingCoords={coords}
        parkingSlots={parkingSlots}
        path={pathData}
      />
      <AppBar
        handleChangeDistance={changeDistance}
        refreshHandler={execute}
        refreshPathHandler={executePath}
        handleCheckboxChange={changeCheckboxes}
        handleChangeFrom={changeStartLocation}
        handleChangeTo={changeEndLocation}
      />
    </>
  );
};

export default MapPage;
