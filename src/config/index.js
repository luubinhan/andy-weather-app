let config;

// eslint-disable-next-line no-undef
switch (process.env.REACT_APP_ENV) {
  case 'dev':
    config = {
      api_host: 'https://www.metaweather.com',
      api_image_path: '/static/img/weather/',
      api_data_path: '/api/location/',
      api_city_path: '/api/location/search/?query=',
      cors: 'https://cors-anywhere.herokuapp.com/'
    };
    break;
  default:
    config = {
      api_host: 'https://www.metaweather.com',
      api_image_path: '/static/img/weather/',
      api_data_path: '/api/location/',
      api_city_path: '/api/location/search/?query=',
      cors: 'https://cors-anywhere.herokuapp.com/'
    };
    break;
}

export default config;
