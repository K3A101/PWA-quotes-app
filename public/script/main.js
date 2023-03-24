console.log('hello')
// Variabele
import { searchBar, url } from "./modules/variabel.js";
import { updateFilterData } from "./modules/render.js";
let newArray = [];

// logica
filterDataByName()

//functies
function filterDataByName() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            newArray = data;
            updateFilterData(newArray)
        })
        .catch(error => console.error(error))
}



searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();

    if (newArray.length > 0) {
        const filteredArray = newArray.filter(item => {
            return item.author.toLowerCase().includes(query);

        });

        updateFilterData(filteredArray)
    }

});