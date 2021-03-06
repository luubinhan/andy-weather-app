import { actions } from './cities';

const setState = jest.fn();
const getState = jest.fn(() => ({}));

beforeEach(() => {
  jest.resetAllMocks();
});

it('should NOT change set state if input null', () => {
  getState.mockReturnValueOnce({
    selectedCity: 0,
    recentLocations: []
  });

  const thunk = actions.changeCity(false);
  thunk({ setState, getState });
  expect(setState).toHaveBeenCalledTimes(0);
});

it('should setState to new one', () => {
  getState.mockReturnValueOnce({
    selectedCity: 0,
    recentLocations: []
  });

  const thunk = actions.changeCity(1);
  thunk({ setState, getState });
  expect(setState).toHaveBeenCalledTimes(1);
  expect(setState).toHaveBeenCalledWith({
    selectedCity: 1,
    recentLocations: [1]
  });
});
