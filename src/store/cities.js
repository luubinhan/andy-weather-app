import { createHook, createStore } from 'react-sweet-state';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    selectedCity: {
      latt_long: '10.759180,106.662498',
      location_type: 'City',
      title: 'Ho Chi Minh City',
      woeid: 1252431
    }
  },
  // actions that trigger store mutation
  actions: {
    changeCity: (city) => ({ setState }) => {
      setState({
        selectedCity: city
      });
    }
  }
});

const useCities = createHook(Store);

export { useCities };
