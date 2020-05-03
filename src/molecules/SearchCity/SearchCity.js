import _ from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import InputGroup from '../../atoms/InputGroup';
import InputGroupAddon from '../../atoms/InputGroupAddon';
import LoadingBar from '../../atoms/LoadingBar';
import useOnClickOutside from '../../hook/useClickOutside';
import useSearchCity from '../../hook/useSearchCity';
import { useCities } from '../../store/cities';
import { ReactComponent as IconSearch } from '../../svg/search.svg';
import { ReactComponent as IconTimes } from '../../svg/times.svg';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    display: block;
  }
`;

const StyledSearchCity = styled.div`
  position: relative;
  margin-right: 5px;
  @media (max-width: 767px) {
    flex-basis: 100%;
    display: flex;
    margin-right: 0;
    input {
      width: 100%;
    }
  }
`;

const StyledResultContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 38px;
  background: #fff;
  padding: 10px;
  z-index: 99;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  max-height: 50vh;
  overflow-y: auto;
  button {
    display: block;
    width: 100%;
    text-align: left;
  }
`;

const StyledIconSearch = styled.span`
  display: inline-flex;
  height: 38px;
  width: 38px;
  align-items: center;
  justify-content: center;
  svg {
    width: 18px;
  }
`;

const StyledClearButton = styled.button`
  display: flex;
  height: 22px;
  width: 22px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background: #000;
  border-radius: 50%;
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 2;
  opacity: 0.5;
  svg {
    width: 8px;
    fill: #fff;
  }
  :hover,
  :focus {
    opacity: 1;
  }
`;

const PATTERN_INPUT = '^[a-zA-Z0-9 ]*$';

const SearchCity = () => {
  const { inputText, setInputText, search } = useSearchCity();
  const [openSuggestion, setOpenSuggestion] = useState(false);
  const [{ recentLocations }, { changeCity }] = useCities();
  const ref = useRef();

  useOnClickOutside(ref, () => setOpenSuggestion(false));

  const handleSelectCity = (city) => {
    changeCity(city);
    setInputText('');
    setOpenSuggestion(false);
  };

  const displaySuggestion = () => {
    if (recentLocations.length) {
      setOpenSuggestion(true);
    }
  };

  const resetSearch = React.useCallback(() => {
    setInputText('');
    setOpenSuggestion(false);
  }, [setInputText]);

  useEffect(() => {
    if (_.get(search.result, 'length')) {
      setOpenSuggestion(true);
    }
  }, [search.result]);

  const results = _.get(search, 'result.length', 0);

  return (
    <StyledContainer ref={ref}>
      <StyledSearchCity>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <StyledIconSearch>
              <IconSearch />
            </StyledIconSearch>
          </InputGroupAddon>
          <Input
            name="search"
            aria-label="Search"
            pattern={PATTERN_INPUT}
            value={inputText}
            maxLength="20"
            placeholder="Search"
            autoComplete="off"
            onFocus={displaySuggestion}
            onChange={(e) => setInputText(e.target.value)}
          />

          {inputText !== '' && (
            <StyledClearButton
              aria-label="clear search"
              type="button"
              onClick={resetSearch}
            >
              <IconTimes />
            </StyledClearButton>
          )}

          {search.loading && (
            <LoadingBar style={{ position: 'absolute', bottom: 0 }} />
          )}
        </InputGroup>
        {openSuggestion && (
          <StyledResultContainer>
            {search.error && <div>Error: {search.error.message}</div>}

            {recentLocations && !results && (
              <div>
                <h6 style={{ paddingLeft: 14 }}>Recent locations</h6>
                <div>
                  {recentLocations.map((city) => (
                    <div key={_.get(city, 'woeid')}>
                      <Button
                        type="button"
                        onClick={() => handleSelectCity(city)}
                      >
                        {_.get(city, 'title')}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!!results && (
              <div>
                <h6 style={{ paddingLeft: 14 }}>Results: {results}</h6>
                <div>
                  {search.result.map((city) => (
                    <div key={_.get(city, 'woeid')}>
                      <Button
                        type="button"
                        onClick={() => handleSelectCity(city)}
                      >
                        {_.get(city, 'title')}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </StyledResultContainer>
        )}
      </StyledSearchCity>
      {inputText &&
        !search.loading &&
        search.result &&
        search.result.length === 0 && (
          <div>
            <small>
              No matches found, try to search for another major city
            </small>
          </div>
        )}
    </StyledContainer>
  );
};

export default SearchCity;
