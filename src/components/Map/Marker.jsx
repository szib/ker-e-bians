import React from 'react';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';

import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';

import { PinIcon } from './icons';

const Marker = ({ position }) => {
  return position ? (
    <LeafletMarker position={position.toArray()} icon={PinIcon}>
      <Popup>
        <HomeIcon color="primary" fontSize="large" />
        <Typography variant="subtitle2" component="div" color="primary">
          <span role="img" aria-label="bunny">
            Here's a bunny. 🐰
          </span>
        </Typography>
      </Popup>
    </LeafletMarker>
  ) : null;
};

export default Marker;
