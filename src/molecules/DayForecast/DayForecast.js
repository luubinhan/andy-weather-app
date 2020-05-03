import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { useAsync } from 'react-async-hook';
import styled from 'styled-components';
import ForeCast from '../../atoms/ForeCast/ForeCast';
import Heading from '../../atoms/Heading';
import LoadingBar from '../../atoms/LoadingBar';
import SubHeading from '../../atoms/SubHeading';
import config from '../../config';
import { MOBILE_WIDTH } from '../../config.json';
import formatDay from '../../helpers/formatDate';
import { useCities } from '../../store/cities';

const StyledDayForecast = styled.div`
  min-height: 271px;
  position: relative;
`;

const StyledLoadingBar = styled.div`
  position: absolute;
  width: 200px;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const StyledCardGroup = styled.div`
  display: flex;
  @media (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
  }
`;

const fetchForeCastData = async (woeid) =>
  (
    await fetch(
      `${config.cors}${config.api_host}${config.api_data_path}/${woeid}/`
    )
  ).json();

const DayForecast = ({ numberOfDay = 5 }) => {
  const [{ selectedCity }] = useCities();
  const asyncForecastData = useAsync(fetchForeCastData, [
    _.get(selectedCity, 'woeid')
  ]);
  const time = _.get(asyncForecastData.result, 'time', 0);

  return (
    <StyledDayForecast>
      {asyncForecastData.loading && (
        <StyledLoadingBar>
          <LoadingBar />
        </StyledLoadingBar>
      )}
      {asyncForecastData.result && (
        <>
          <Heading>{_.get(asyncForecastData.result, 'title')}</Heading>
          <SubHeading>
            {formatDay(Date.parse(time), {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </SubHeading>
          <StyledCardGroup>
            {_.take(
              _.get(asyncForecastData.result, 'consolidated_weather', []),
              numberOfDay
            ).map((weather, index) => {
              return (
                <ForeCast
                  key={weather.id}
                  timeStamp={new Date(
                    _.get(weather, 'applicable_date', 0)
                  ).getTime()}
                  active={index === 0}
                  minTemperature={_.get(weather, 'min_temp')}
                  maxTemperature={_.get(weather, 'max_temp')}
                  stateAbbr={_.get(weather, 'weather_state_abbr')}
                  stateName={_.get(weather, 'weather_state_name')}
                />
              );
            })}
          </StyledCardGroup>
        </>
      )}
    </StyledDayForecast>
  );
};

DayForecast.propTypes = {
  numberOfDay: PropTypes.number
};

export default DayForecast;
