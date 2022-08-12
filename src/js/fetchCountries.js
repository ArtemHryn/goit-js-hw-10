const BASE_URL = 'https://restcountries.com/v2/name';
function fetchCountries(name) {
    return fetch(
      `${BASE_URL}/${name}?fields=name,capital,currencies,population,languages,flags`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json()
    });
}

export default { fetchCountries };