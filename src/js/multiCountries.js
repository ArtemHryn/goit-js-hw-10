function renderMultiCountries(countries) {
  return countries.map(({ flags: { svg }, name }) => {
    return `<li class="list-item">
      <p class="country">
        <img src="${svg}" alt="${name}" class="flag" />
        ${name}
      </p>
    </li>`
  }).join("");
}

export default { renderMultiCountries };
