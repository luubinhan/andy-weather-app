import { render } from '@testing-library/react';
import React from 'react';
import ForeCast from './ForeCast';

test('render weekday', () => {
  const { getByText } = render(<ForeCast timeStamp={1588236113} />);
  const weekday = getByText(/Monday/i);
  expect(weekday).toBeInTheDocument();
});

test('render correct prop', () => {
  const { getByText } = render(
    <ForeCast timeStamp={1588236113} maxTemperature={90} minTemperature={20} />
  );
  const maxTemperature = getByText(/90/i);
  const minTemperature = getByText(/20/i);
  expect(maxTemperature).toBeInTheDocument();
  expect(minTemperature).toBeInTheDocument();
});

test('render image for weather', () => {
  const { getByAltText } = render(<ForeCast timeStamp={1588236113} />);
  const img = getByAltText(/clear/i);
  expect(img).toBeInTheDocument();
});
