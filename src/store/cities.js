import { createHook, createStore } from 'react-sweet-state';

const initialState = {
  selectedCity: {
    latt_long: '10.759180,106.662498',
    location_type: 'City',
    title: 'Ho Chi Minh City',
    woeid: 1252431
  }
};

const actions = {
  changeCity: (city) => ({ setState }) => {
    if (city) {
      setState({
        selectedCity: city
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
