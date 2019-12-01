import React from 'react';
import { Polyline } from 'react-leaflet';

const Path = ({ path }) => {
  return path ? (
    <Polyline positions={path} color="blue" weight={4}></Polyline>
  ) : null;
};

export default Path;
