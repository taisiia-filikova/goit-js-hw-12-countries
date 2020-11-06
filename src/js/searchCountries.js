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




// Лена

// import debounce from 'lodash.debounce';
// import API from './fetchCountries.js';
// import listOfContriesTpl from '../templates/list-of-countries.hbs';
// import countryCardTpl from '../templates/country-markup.hbs';

// import { info, error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// const inputEl = document.querySelector('.input-search');
// const cardContainer = document.querySelector('.js-card-container');
// let countryToSearch = '';

// inputEl.addEventListener(
//   'input',
//   debounce(() => {
//     onSearch();
//   }, 500),
// );

// function onSearch() {
//   countryToSearch = inputEl.value;
//   console.log(countryToSearch);

//   if (!countryToSearch) {
//     clearMarkup();
//     return;
//   }

//   API.fetchCountries(countryToSearch)
//     .then(checkingNumberOfCountries)
//     .catch(onFetchError);
// }

// function checkingNumberOfCountries(countries) {
//   if (countries.length > 10) {
//     clearMarkup();
//     tooManyCountries();
//   } else if (countries.length <= 10 && countries.length > 1) {
//     clearMarkup();
//     renderMarkup(listOfContriesTpl, countries);
//   } else if (countries.length === 1) {
//     clearMarkup();
//     renderMarkup(countryCardTpl, countries[0]);
//   } else {
//     clearMarkup();
//     noResult();
//   }
// }

// function renderMarkup(template, countries) {
//   const markup = template(countries);
//   cardContainer.insertAdjacentHTML('beforeend', markup);
// }

// function clearMarkup() {
//   cardContainer.innerHTML = '';
// }

// function noResult() {
//   info({
//     title: 'Uh Oh!',
//     text: 'No matches found!',
//     delay: 1500,
//     closerHover: true,
//   });
// }

// function tooManyCountries() {
//   error({
//     title: 'Uh Oh!',
//     text: 'Too many matches found. Please enter a more specific query!',
//     delay: 2500,
//     closerHover: true,
//   });
// }

// function onFetchError(error) {
//   clearMarkup();

//   console.log(error);
// }





// Настя




// import './css/main.css';
// import countriesApi from './js/fetchCountries';
// import countryTpl from './templates/markupCountry.hbs';
// import listContriesTpl from './templates/markupListContries.hbs';

// import { info, error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// const debounce = require('lodash.debounce');
// let searchedCountry = '';

// const refs = {
//   input: document.querySelector('.js-search-input'),
//   countriesContainer: document.querySelector('.js-countries-container'),
// };

// refs.input.addEventListener('input', debounce(onSearch, 500));

// function onSearch() {
//   clearSearch();
//   searchedCountry = refs.input.value;
//   countriesApi(searchedCountry)
//     .then(markupResult)
//     .catch(err => console.log(err));
// }

// function clearSearch() {
//   refs.countriesContainer.innerHTML = '';
// }

// function markupResult(countries) {
//   if (countries.length === 1) {
//     clearSearch();
//     markupContries(countryTpl, countries);
//   } else if (countries.length > 1 && countries.length <= 10) {
//     clearSearch();
//     markupContries(listContriesTpl, countries);
//   } else if (countries.length > 10) {
//     outputInfo(
//       error,
//       'To many matches found. Please enter a more specific query!',
//     );
//   } else {
//     outputInfo(info, 'No matches found!');
//   }
// }

// function outputInfo(typeInfo, text) {
//   typeInfo({
//     text: `${text}`,
//     delay: 1400,
//     closerHover: true,
//   });
// }

// function markupContries(tpl, countries) {
//   refs.countriesContainer.insertAdjacentHTML('beforeend', tpl(countries));
// }

