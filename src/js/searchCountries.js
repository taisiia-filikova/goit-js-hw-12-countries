import countryApi from './js/fetchCountries';
import countryData from '../templates/countryData.hbs';
import countryList from '../templates/countryList.hbs';

import debounce from 'lodash.debounce';
import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  input: document.querySelector('.js-input-search'),
  country: document.querySelector('.js-country'),
};

refs.input.addEventListener('input', debounce(onSearch1214367, 500));

let searchedCountry = '';