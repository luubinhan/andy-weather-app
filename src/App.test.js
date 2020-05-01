import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('render input search', () => {
  const { getByPlaceholderText } = render(<App />);
  const searchInput = getByPlaceholderText(/Search/i);
  expect(searchInput).toBeInTheDocument();
});
