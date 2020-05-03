import unionBy from 'lodash/unionBy';
import { createHook, createStore, defaults } from 'react-sweet-state';

defaults.devtools = true;

const initialState = {
  selectedCity: {
    latt_long: '10.759180,106.662498',
    location_type: 'City',
    title: 'Ho Chi Minh City',
    woeid: 1252431
  },
  recentLocations: []
};

const actions = {
  changeCity: (city) => ({ getState, setState }) => {
    if (city) {
      setState({
        selectedCity: city
      });
      setState({
        recentLocations: unionBy([...getState().recentLocations, city], 'woeid')
      });
    }
  }
};

const Store = createStore({
  initialState,
  actions
});

const useCities = createHook(Store);

export { useCities, actions };
