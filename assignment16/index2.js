var countrydata = [];

async function fetchCountryData() {
    try {
        let res = await fetch(`https://restcountries.com/v3.1/all`);
        countrydata = await res.json();
        console.log(countrydata)

        if (countrydata.status === 404) {
            displayErrorMessage("Country not found");
            return;
        }
    } catch (error) {
        console.log("error", error)
    }

};

fetchCountryData();


let search = document.getElementById('searchbar');
let searchButton = document.getElementById('searchButton');
let searchinput1 = document.getElementById('searchinput1');
let searchinput2 = document.getElementById('searchinput2');
let searchinput3 = document.getElementById('searchinput3');
let containerCard = document.getElementById('containerCard');

searchButton.addEventListener("click", () => {
    let cName = searchinput1.value.trim();
    let cCurrency = searchinput2.value.trim();
    let cphone = searchinput3.value.trim();
    console.log(cName)
    if (cName !== "") {
        displayCountries(cName);
    }
    else if (cCurrency !== "") {
        displayCountries(cCurrency);
    }
    else if (cphone !== "") {
        displayCountries(cphone);
    }
});


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

  const data={
    name:country.name.common,
    capital:country.capital[0],
    population: country.population
  };

  card.dataset.country=JSON.stringify(data);

    return card;
}


function displayCountries(contry) {
    // let html = '';
    // console.log(countries);
    // let filter

    // const card = createCountryCard(countries);
    // containerCard.appendChild(card);

    console.log(countrydata)
    console.log(contry)
    countrydata.forEach(con => {
        // console.log(con.name.common);
        if (contry === con.name.common) {
            const card = createCountryCard(con);
            containerCard.appendChild(card);
        }
        // console.log(Object.keys(con.currencies))
    })

}

function getCountryDataFromCard(card){
    const condatastr=card.dataset.country;
    return JSON.parse(condatastr);
}

const exportJsonButton = document.getElementById('exportJsonButton');
exportJsonButton.addEventListener("click", () => {
  const cards = document.querySelectorAll('.card');
  console.log(cards);
  const cardsData = Array.from(cards).map(card => getCountryDataFromCard(card));
  // Create a Blob with the JSON data and initiate the download
  const jsonData = JSON.stringify(cardsData, null, 2); // Format with indentation
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a")
  a.href = url;
  a.download = "country_cards.json";
  a.click();
  URL.revokeObjectURL(url);
});


// btn.addEventListener("click",fun);
// btn.addEventListener("click",()=>{
//     // let cName = searchinput1.value.trim();
//     // let obj={};
//     // countrydata.forEach(con=>{
//     //     if(cName===con.name.common){
//     //         obj.country=con.name.common
//     //     }
//     // })
//     const c=document.getElementById('card');

//     if(c){
//         const data={
//             name: c.querySelector("h2").textContent,
//             capital : c.querySelector("p").textContent.replace("Capital: ",""),
//             population: c.querySelector("p").textContent.replace("Population: ","")
//         }
//         console.log(data)
//     }
    
// });



// let obj=[];
// function downloadJson(div) {
//     let tag = {}
//     tag['tagName'] = div.tagName
//     tag['children'] = []
//     for (var i = 0; i < div.children.length; i++) {
//         tag['children'].push(downloadJson(div.children[i]))
//     }
//     for (var i = 0; i < div.attributes.length; i++) {
//         var attr = div.attributes[i]
//         tag['@' + attr.name] = attr.value
//     }
//     return tag
// }
// let c=document.getElementById('card')
// let ans=downloadJson(c,obj);
// console.log(ans);