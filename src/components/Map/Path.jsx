import React from 'react';
import { Polyline } from 'react-leaflet';

const Path = ({ path }) => {
  return path ? (
    <Polyline positions={path} color="#2f47ea" opacity={.7} weight={3}></Polyline>
  ) : null;
};

export default Path;
