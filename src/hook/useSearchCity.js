import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useState } from 'react';
import { useAsyncAbortable } from 'react-async-hook';
import useConstant from 'use-constant';
import config from '../config';

const fetchCities = async (text, abortSignal) => {
  const result = await fetch(
    `${config.cors}${config.api_host}${
      config.api_city_path
    }${encodeURIComponent(text)}`,
    {
      signal: abortSignal
    }
  );
  if (result.status !== 200) {
    throw new Error(result.status);
  }
  const json = await result.json();
  return json;
};

const useSearchCity = () => {
  const [inputText, setInputText] = useState('');

  const debouncedSearchCities = useConstant(() =>
    AwesomeDebouncePromise(fetchCities, 300)
  );

  const search = useAsyncAbortable(
    async (abortSignal, text) => {
      if (text.length === 0) {
        return [];
      } else {
        return debouncedSearchCities(text, abortSignal);
      }
    },
    [inputText]
  );

  return {
    inputText,
    setInputText,
    search
  };
};

export default useSearchCity;
