
let search = document.getElementById('searchbar');
let searchButton = document.getElementById('searchButton');
let searchinput = document.getElementById('searchinput');

searchButton.addEventListener("click", () => {
    let cName = searchinput.value.trim();
    if (cName !== "") {
        loadAPI(cName);
    }
});

let containerCard = document.getElementById('containerCard');

const loadAPI = async (cName) => {
    containerCard.innerHTML = "";
    try {
        let res = await fetch(`https://restcountries.com/v3.1/name/${cName}`);
        let data = await res.json();
        if (data.status === 404) {
            displayErrorMessage("Country not found");
            return;
        }
        displayCountries(data[0]);
    } catch (error) {
        console.log("error", error)
    }
};

function displayErrorMessage(message) {
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;
    containerCard.innerHTML = "";
    containerCard.appendChild(errorMessage);
}

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