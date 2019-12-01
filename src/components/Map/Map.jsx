import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Marker from './Marker';
import ParkingBay from './ParkingBay';
import Path from './Path';

const logEvent = event => {
  console.log(event);
};

const MainMap = ({ center, parkingCoords, parkingSlots, path }) => {
  return (
    <>
      <Map center={center.toArray()} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} />
        {parkingCoords && (
          <ParkingBay
            positions={parkingCoords}
            parkingSlots={parkingSlots}
            clickHandler={logEvent}
          />
        )}
        {path && <Path path={path} />}
      </Map>
    </>
  );
};

export default MainMap;
