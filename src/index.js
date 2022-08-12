import listOfCountries from './js/fetchCountries';
import singleCountry from './js/singleCountry';
import multiCountries from './js/multiCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './sass/index.scss';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countriesList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(e) {
  const name = e.target.value.trim();
  if (!name) {
    renderMarkup();
    Notiflix.Notify.info('Enter the country name');
    return;
  }
  listOfCountries
    .fetchCountries(name)
    .then(checkCountriesArray)
    .catch(error => {
      Notiflix.Notify.warning('Oops, there is no country with that name');
    });
}

function renderMarkup(multi = '', single = '') {
  refs.countriesList.innerHTML = multi;
  refs.countryInfo.innerHTML = single;
}

function checkCountriesArray(countries) {
  if (countries.length > 10) {
    renderMarkup();
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }
  if (countries.length > 1) {
    renderMarkup(multiCountries.renderMultiCountries(countries), '');
    return;
  }
  if (countries.length === 1) {
    renderMarkup('', singleCountry.renderSingleCountry(...countries));
    return;
  }
}
