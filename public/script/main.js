console.log('hello')
const searchBar = document.getElementById('search');
const url = 'https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1';
let newArray = [];

filterDataByName()

function filterDataByName() {
    fetch(url)
    .then(response=> response.json())
    .then(data => {
        newArray = data;
        updateFilterData(newArray)
    })
    .catch(error => console.error(error))
}


function updateFilterData(data) {
   const quoteList = document.getElementById('content');
   quoteList.innerHTML ='';
   let html = ''
   data.forEach(item => {
       html += `
          <article>
           <section>
              <q>${item.quote}</q>

              <p class="author">${item.author}</p>
            </section>
            <section>
              <img src="${item.avatar}" alt="Avatar">
              <p>${item.bio}</p>
            </section>
            <ul>
              <li>${item.tags}</li>                
            </ul>             
          </article>`

   });
    quoteList.insertAdjacentHTML('beforeend', html);
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