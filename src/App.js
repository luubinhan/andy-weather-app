import React from 'react';
import styled from 'styled-components';
import DayForecast from './molecules/DayForecast/DayForecast';
import SearchCity from './molecules/SearchCity/SearchCity';

const StyledWrapper = styled.div`
  background-color: #efefef;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  flex-basis: 900px;
  background: #fff;
  margin: 0 auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: 767px) {
    flex-basis: 90%;
  }
`;

const StyledHeader = styled.div`
  padding: 40px;
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
