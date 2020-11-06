const BASE_URL = 'https://restcountries.eu/rest/v2/name';

export default function fetchCountries(countrySearch) {
  return fetch(`${BASE_URL}/${countrySearch}`).then(response => response.json());
}