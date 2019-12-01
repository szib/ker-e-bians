import useAxios from 'axios-hooks';

const baseURL = process.env.REACT_APP_API_URL;

const usePath = ({ routeRarams }) => {
  console.log('routeRarams', routeRarams);
  const api = useAxios({
    baseURL,
    url: '/routewithpark',
    params: routeRarams
  });

  return api;
};

export default usePath;
