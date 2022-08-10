function renderSingleCountry(country) {
    const { flags: { svg }, name, capital, population, languages } = country
    const listOfLangueages = languages.map(({ name }, index) => {
        if (index === languages.length - 1) {
            return `<span class="country_title_value">${name}</span>`
        }
        return `<span class="country_title_value">${name}, </span>`
    }).join('')
    return `<h3 class='county_name'><img
    src='${svg}'
    alt='${name}'
    class='country_flag'
  />${name}</h3>
<ul class='country_titles_list'>
  <li>
    <p class='country_title_name'>Capital:
      <span class='country_title_value'>${capital}</span>
    </p>
  </li>
  <li>
    <p class='country_title_name'>Population:
      <span class='country_title_value'>${population}</span>
    </p>
  </li>
  <li>
    <p class='country_title_name'>Language: ${listOfLangueages}

    </p>
  </li>
</ul>`
}

export default { renderSingleCountry };