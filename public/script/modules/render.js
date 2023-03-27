
export function updateFilterData(data) {
    const quoteList = document.getElementById('content');
    quoteList.innerHTML = '';
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
