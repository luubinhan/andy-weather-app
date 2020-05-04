import React from 'react';
import styled from 'styled-components';
import DayForecast from './molecules/DayForecast/DayForecast';
import SearchCity from './molecules/SearchCity/SearchCity';
import { MOBILE_WIDTH } from './settings.json';

const StyledWrapper = styled.div`
  background-color: #efefef;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${MOBILE_WIDTH}) {
    display: block;
    padding: 10px 20px;
  }
`;

const StyledContainer = styled.div`
  flex-basis: 900px;
  background: #fff;
  margin: 0 auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: ${MOBILE_WIDTH}) {
    flex-basis: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const StyledHeader = styled.div`
  padding: 40px;
  @media (max-width: ${MOBILE_WIDTH}) {
    padding: 20px;
  }
`;

function App() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledHeader>
          <SearchCity />
        </StyledHeader>
        <DayForecast />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default App;
