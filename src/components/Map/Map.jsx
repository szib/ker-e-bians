import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Marker from './Marker';
import ParkingBay from './ParkingBay';

const logEvent = event => {
  console.log(event);
};

const MainMap = ({ center, parkingCoords }) => {
  return (
    <>
      <Map center={center.toArray()} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} />
        {parkingCoords && (
          <ParkingBay positions={parkingCoords} clickHandler={logEvent} />
        )}
      </Map>
    </>
  );
};

export default MainMap;
