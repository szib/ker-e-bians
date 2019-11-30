import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Marker from './Marker';

const MainMap = ({ center }) => {
  return (
    <>
      <Map center={center.toArray()} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} />
      </Map>
    </>
  );
};

export default MainMap;
