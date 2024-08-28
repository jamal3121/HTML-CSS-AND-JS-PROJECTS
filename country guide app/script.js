let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  let result = document.getElementById("result");

  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = `
     <img src="${data[0].flags.svg}" class="flag-img"></img>
     <h2>${data[0].name.common}</h2>
     <div class="wrapper">
       <div class="data-wrapper">
           <h4>Capital:</h4>
          <span>${data[0].capital[0]}</span>
       </div>
     </div>
     <div class="wrapper">
       <div class="data-wrapper">
           <h4>Population:</h4>
          <span>${data[0].population}</span>
       </div>
     </div>
     <div class="wrapper">
       <div class="data-wrapper">
           <h4>Currency:</h4>
          <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${
        Object.keys(data[0].currencies)[0]
      }</span>
       </div>
     <div class="wrapper">
       <div class="data-wrapper">
           <h4>Common Languages:</h4>
          <span>${Object.values(data[0].languages)
            .toString()
            .split(",")
            .join(", ")}</span>
       </div>
     </div>
     `;
    });
});
