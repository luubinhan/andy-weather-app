import { render } from '@testing-library/react';
import React from 'react';
import DayForecast from './DayForecast';

jest.mock('react-async-hook', () => ({
  useAsync: jest.fn().mockReturnValue({
    loading: false,
    result: {
      consolidated_weather: [
        {
          id: 6518541505265664,
          weather_state_name: 'Heavy Rain',
          weather_state_abbr: 'hr',
          wind_direction_compass: 'SSW',
          created: '2020-04-30T09:16:02.193369Z',
          applicable_date: '2020-04-30',
          min_temp: 7.805,
          max_temp: 11.975000000000001,
          the_temp: 12.68,
          wind_speed: 11.262575651727246,
          wind_direction: 205.15460102482635,
          air_pressure: 994.5,
          humidity: 69,
          visibility: 10.5953108844349,
          predictability: 77
        },
        {
          id: 5660522382884864,
          weather_state_name: 'Light Rain',
          weather_state_abbr: 'lr',
          wind_direction_compass: 'W',
          created: '2020-04-30T09:16:02.325352Z',
          applicable_date: '2020-05-01',
          min_temp: 8.184999999999999,
          max_temp: 15.934999999999999,
          the_temp: 14.855,
          wind_speed: 8.828317877327077,
          wind_direction: 261.995106749009,
          air_pressure: 999.5,
          humidity: 56,
          visibility: 11.402782748747317,
          predictability: 75
        },
        {
          id: 5225388659703808,
          weather_state_name: 'Light Cloud',
          weather_state_abbr: 'lc',
          wind_direction_compass: 'WNW',
          created: '2020-04-30T09:16:02.213873Z',
          applicable_date: '2020-05-02',
          min_temp: 7.795,
          max_temp: 15.35,
          the_temp: 14.83,
          wind_speed: 7.84035158268777,
          wind_direction: 288.5053480084724,
          air_pressure: 1010.5,
          humidity: 51,
          visibility: 11.859179889445638,
          predictability: 70
        },
        {
          id: 5995346104680448,
          weather_state_name: 'Heavy Cloud',
          weather_state_abbr: 'hc',
          wind_direction_compass: 'S',
          created: '2020-04-30T09:16:03.309848Z',
          applicable_date: '2020-05-03',
          min_temp: 9.005,
          max_temp: 14.07,
          the_temp: 14.145,
          wind_speed: 4.05222348096185,
          wind_direction: 182.75999173989965,
          air_pressure: 1018.5,
          humidity: 59,
          visibility: 13.446161914419788,
          predictability: 71
        },
        {
          id: 6485258058858496,
          weather_state_name: 'Light Rain',
          weather_state_abbr: 'lr',
          wind_direction_compass: 'SSW',
          created: '2020-04-30T09:16:03.529496Z',
          applicable_date: '2020-05-04',
          min_temp: 10.575,
          max_temp: 19.725,
          the_temp: 16.47,
          wind_speed: 4.714266473167369,
          wind_direction: 207.0,
          air_pressure: 1019.5,
          humidity: 67,
          visibility: 11.96325956414539,
          predictability: 75
        },
        {
          id: 6242845608378368,
          weather_state_name: 'Showers',
          weather_state_abbr: 's',
          wind_direction_compass: 'E',
          created: '2020-04-30T09:16:05.818578Z',
          applicable_date: '2020-05-05',
          min_temp: 10.870000000000001,
          max_temp: 18.35,
          the_temp: 16.92,
          wind_speed: 5.992325419549829,
          wind_direction: 96.00000000000001,
          air_pressure: 1018.0,
          humidity: 60,
          visibility: 9.979842718523821,
          predictability: 73
        }
      ],
      time: '2020-04-30T10:16:56.914152+01:00',
      sun_rise: '2020-04-30T05:33:34.183308+01:00',
      sun_set: '2020-04-30T20:22:51.586316+01:00',
      timezone_name: 'LMT',
      parent: {
        title: 'England',
        location_type: 'Region / State / Province',
        woeid: 24554868,
        latt_long: '52.883560,-1.974060'
      },
      sources: [
        {
          title: 'BBC',
          slug: 'bbc',
          url: 'http://www.bbc.co.uk/weather/',
          crawl_rate: 360
        },
        {
          title: 'Forecast.io',
          slug: 'forecast-io',
          url: 'http://forecast.io/',
          crawl_rate: 480
        },
        {
          title: 'HAMweather',
          slug: 'hamweather',
          url: 'http://www.hamweather.com/',
          crawl_rate: 360
        },
        {
          title: 'Met Office',
          slug: 'met-office',
          url: 'http://www.metoffice.gov.uk/',
          crawl_rate: 180
        },
        {
          title: 'OpenWeatherMap',
          slug: 'openweathermap',
          url: 'http://openweathermap.org/',
          crawl_rate: 360
        },
        {
          title: 'Weather Underground',
          slug: 'wunderground',
          url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
          crawl_rate: 720
        },
        {
          title: 'World Weather Online',
          slug: 'world-weather-online',
          url: 'http://www.worldweatheronline.com/',
          crawl_rate: 360
        }
      ],
      title: 'London',
      location_type: 'City',
      woeid: 44418,
      latt_long: '51.506321,-0.12714',
      timezone: 'Europe/London'
    }
  })
}));

test('render weather data', async () => {
  const { getByText } = render(<DayForecast />);
  const title = getByText(/London/i);
  expect(title).toBeInTheDocument();
});

test('render 5 day forecast', async () => {
  const { getAllByTestId } = render(<DayForecast />);
  const els = getAllByTestId('card-weather');
  expect(els.length).toEqual(5);
});
