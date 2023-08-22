// const loadCountryAPI = () => {
//     // fetch url of rest country from website
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => displayCountries(data));
//   };


// const displayCountries = (countries) => {  
//     const countriesHTML = countries.map((country) => getcountry(country));
//     const container = document.getElementById("countries");
//     container.innerHTML = countriesHTML.join(" ");
// };

// const getcountry = (country) => {
//     console.log(country);
//     return `
//       <div class="countries">
//       <img src="${country.flags.png}">
//       <h1> ${country.name.common}</h1>
//       <h3> "is country independent: ${country.independent}"</h3>
//       <h3> ${country.region}</h3>
//       <h3> ${country.population}</h3>
//       </div>
//       `;

//   };

//   loadCountryAPI();


let search = document.getElementById('searchbar');
let searchButton=document.getElementById('searchButton');
let searchinput=document.getElementById('searchinput');

searchButton.addEventListener("click",()=>{
    let cName=searchinput.value.trim();
    if(cName!==""){
        loadAPI(cName);
    }
});

let containerCard = document.getElementById('containerCard');
const loadAPI = (cName) => {
    containerCard.innerHTML="";
    let url = fetch(`https://restcountries.com/v3.1/name/${cName}`);
    url.then(res => res.json()).
        then(data => displayCountries(data[0]));
};



function createCountryCard(country) {
    const card = document.createElement("div");
    card.classList.add("card");

    const flagImg = document.createElement("img");
    flagImg.src = country.flags.png;
    flagImg.classList.add("image")
    console.log(country.flags[0])
    flagImg.alt = `${country.name.common} Flag`;
    card.appendChild(flagImg);

    const name = document.createElement("h2");
    name.textContent = country.name.common;
    name.classList.add("common");
    card.appendChild(name);

    const capital = document.createElement("p");
    capital.textContent = `Capital: ${country.capital}`;
    capital.classList.add("common");
    card.appendChild(capital);

    const population = document.createElement("p");
    population.textContent = `Population: ${country.population}`;
    population.classList.add("common");
    card.appendChild(population);

    return card;
}


function displayCountries(countries) {
    let html = '';
    console.log(countries);
    // countries.forEach(element => {
        const card = createCountryCard(countries);
        containerCard.appendChild(card);
    // });
}
// loadAPI();