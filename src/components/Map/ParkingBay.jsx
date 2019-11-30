import React from 'react';
import { Polyline, Popup } from 'react-leaflet';
import { Typography } from '@material-ui/core';

const ParkingBay = ({ positions, clickHandler, popupContent }) => {
  return positions ? (
    <Polyline
      positions={positions}
      color="lime"
      weight={4}
      onclick={clickHandler}
    >
      <Popup>
        <Typography variant="subtitle2" component="div" color="primary">
          It's a div
        </Typography>
        <Typography variant="subtitle2" component="div" color="primary">
          And another one
        </Typography>
      </Popup>
      }
    </Polyline>
  ) : null;
};

export default ParkingBay;
