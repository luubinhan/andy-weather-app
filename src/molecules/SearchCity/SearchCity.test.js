import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchCity from './SearchCity';

jest.mock('../../store/cities', () => ({
  useCities: jest.fn().mockReturnValue([
    { selectedCity: null, recentLocations: [] },
    {
      changeCity: jest.fn()
    }
  ])
}));

jest.mock('../../hook/useSearchCity', () => {
  return function dummySearchCity() {
    return {
      inputText: '',
      setInputText: jest.fn(),
      search: {
        result: [
          {
            title: 'London',
            location_type: 'City',
            woeid: 44418,
            latt_long: '51.506321,-0.12714'
          }
        ]
      }
    };
  };
});

test('It should has input text', () => {
  const { getByPlaceholderText } = render(<SearchCity />);
  const searchInput = getByPlaceholderText(/Search/i);
  expect(searchInput).toBeInTheDocument();
});

test('It should display number of result correctly', () => {
  const { getByText } = render(<SearchCity />);
  const resultText = getByText(/Results: 1/i);
  const cityText = getByText(/London/i);
  expect(resultText).toBeInTheDocument();
  expect(cityText).toBeInTheDocument();
});

it('It should NOT display clear button when input empty', () => {
  const clearButton = screen.queryByText('clear search');
  expect(clearButton).toBeNull();
});
