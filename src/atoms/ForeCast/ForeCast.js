import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import config from '../../config';
import formatDay from '../../helpers/formatDate';

const StyledCard = styled.div`
  flex-grow: 1;
  border-left: 1px solid #e0e0e0;
  padding: 20px;
  background: ${(props) => (props.active ? '#f3f3f3' : '#fff')};
  border-top: 1px solid ${(props) => (props.active ? '#000' : '#e0e0e0')};
  text-align: center;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    padding: 10px 20px;
  }
`;

const StyledWeekday = styled.h5`
  font-weight: bold;
  margin: 0;
`;

const StyledIcon = styled.div`
  margin: 20px auto 0;
  img {
    height: 50px;
    @media (max-width: 767px) {
      height: 30px;
    }
  }
  @media (max-width: 767px) {
    margin: 0 20px 0 auto;
  }
`;

const StyledStateName = styled.div`
  margin-bottom: 20px;
  @media (max-width: 767px) {
    margin: 0 20px 0 0;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

const StyledMaxTemp = styled.h3`
  font-size: 2rem;
  line-height: 1;
  font-weight: bold;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

const StyledMinTemp = styled.div`
  font-size: 1.2rem;
  color: #6b6b6b;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

const ForeCast = ({
  timeStamp,
  maxTemperature = 0,
  minTemperature = 0,
  stateAbbr = 'c',
  stateName = 'clear',
  active = false
}) => {
  return (
    <StyledCard active={active} data-testid="card-weather">
      <StyledWeekday>{formatDay(timeStamp)}</StyledWeekday>
      <StyledIcon>
        <img
          src={`${config.api_host}${config.api_image_path}${stateAbbr}.svg`}
          alt={stateName}
          loading="lazy"
        />
      </StyledIcon>
      <StyledStateName>{stateName}</StyledStateName>
      <div>
        <StyledMaxTemp>
          {maxTemperature.toFixed(0)}
          <span>°</span>
        </StyledMaxTemp>
        <StyledMinTemp>
          {minTemperature.toFixed(0)}
          <span>°</span>
        </StyledMinTemp>
      </div>
    </StyledCard>
  );
};

ForeCast.propTypes = {
  timeStamp: PropTypes.number.isRequired,
  stateAbbr: PropTypes.string,
  stateName: PropTypes.string,
  minTemperature: PropTypes.number,
  maxTemperature: PropTypes.number,
  active: PropTypes.bool
};

export default ForeCast;
