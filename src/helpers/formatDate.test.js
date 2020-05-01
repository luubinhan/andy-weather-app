import formatDate from './formatDate';

test('return empty string when data invalid', () => {
  const data = formatDate(null);
  expect(data).toEqual('');
});

test('return correct weekday', () => {
  const data = formatDate(1588236113);
  expect(data).toEqual('Monday');
});
