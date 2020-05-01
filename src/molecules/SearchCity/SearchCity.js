import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import InputGroup from '../../atoms/InputGroup';
import InputGroupAddon from '../../atoms/InputGroupAddon';
import LoadingBar from '../../atoms/LoadingBar';
import useSearchCity from '../../hook/useSearchCity';
import { useCities } from '../../store/cities';
import { ReactComponent as IconSearch } from '../../svg/search.svg';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSearchCity = styled.div`
  position: relative;
  margin-right: 5px;
`;

const StyledResultContainer = styled.div`
  position: absolute;
  width: 228px;
  background: #fff;
  padding: 10px;
  z-index: 99;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  button {
    display: block;
    width: 100%;
    text-align: left;
  }
`;

const StyledIcon = styled.span`
  display: inline-flex;
  height: 38px;
  width: 38px;
  align-items: center;
  justify-content: center;
  svg {
    width: 18px;
  }
`;

const PATTERN_INPUT = '^[a-zA-Z0-9 ]*$';

const SearchCity = () => {
  const { inputText, setInputText, search } = useSearchCity();
  const [openSuggestion, setOpenSuggestion] = useState(!!search.result);
  const [, { changeCity }] = useCities();

  const handleSelectCity = (city) => {
    changeCity(city);
    setInputText('');
    setOpenSuggestion(false);
  };

  useEffect(() => {
    if (_.get(search.result, 'length')) {
      setOpenSuggestion(true);
    }
  }, [search.result]);

  return (
    <StyledContainer>
      <StyledSearchCity>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <StyledIcon>
              <IconSearch />
            </StyledIcon>
          </InputGroupAddon>
          <Input
            name="search"
            pattern={PATTERN_INPUT}
            value={inputText}
            maxLength="20"
            placeholder="Search"
            autoComplete="off"
            onChange={(e) => setInputText(e.target.value)}
          />

          {search.loading && (
            <LoadingBar style={{ position: 'absolute', bottom: 0 }} />
          )}
        </InputGroup>
        {openSuggestion && (
          <StyledResultContainer>
            {search.error && <div>Error: {search.error.message}</div>}

            <div>
              <h6 style={{ paddingLeft: 14 }}>
                Results: {_.get(search, 'result.length', 0)}
              </h6>
              {search.result && (
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
              )}
            </div>
          </StyledResultContainer>
        )}
      </StyledSearchCity>
      {inputText &&
        !search.loading &&
        search.result &&
        search.result.length === 0 && <div>No match, Try to search for another major city</div>}
    </StyledContainer>
  );
};

export default SearchCity;
