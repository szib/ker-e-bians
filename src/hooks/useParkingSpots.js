import useAxios from 'axios-hooks';

import * as R from 'ramda';

// const getCoordinates = R.pipe(R.map(R.pathOr([], ['geometry', 'coordinates'])));

const getCoordinates = R.ifElse(
  R.length,
  R.map(R.pathOr([], ['geometry', 'coordinates'])),
  () => []
);

const getNumberOfParkingSlots = R.ifElse(
  R.length,
  R.map(R.pathOr([], ['properties', 'CarSpaces'])),
  () => []
);

const baseURL = process.env.REACT_APP_API_URL;

const useParkingSpots = ({ params }) => {
  const api = useAxios({
    baseURL,
    url: '/parkingspots',
    params
  });

  // api.push(getCoordinates);
  api[0] = { ...api[0], getCoordinates, getNumberOfParkingSlots };

  return api;
};

export default useParkingSpots;
