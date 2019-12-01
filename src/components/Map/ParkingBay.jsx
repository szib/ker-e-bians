import React, { useState } from 'react';
import { Polyline, Popup } from 'react-leaflet';
import { Typography, Button } from '@material-ui/core';

import uuid from 'uuid/v4';

const PB = ({ pos, slot }) => {
  const [slots, setSlots] = useState(slot);
  const [isParking, setIsParking] = useState(false);

  const toggleParking = () => {
    const newSlots = isParking ? slots + 1 : slots - 1;
    setSlots(newSlots);
    setIsParking(prev => !prev);
  };

  return (
    <Polyline positions={pos} color="lime" weight={6}>
      <Popup>
        <Typography variant="subtitle2" component="div" color="primary">
          Spaces: {slots}
        </Typography>
        <Button variant="contained" color="primary" onClick={toggleParking}>
          {isParking ? 'Free up' : 'Park here'}
        </Button>
      </Popup>
      }
    </Polyline>
  );
};

const ParkingBay = ({ positions, clickHandler, parkingSlots }) => {
  if (!positions) return null;

  const elements = positions.map((pos, idx) => (
    <PB key={uuid()} pos={pos} slot={parkingSlots[idx]} />
  ));

  return elements;
};

export default ParkingBay;
