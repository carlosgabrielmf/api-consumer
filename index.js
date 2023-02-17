

function getCharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data);
    });
}


getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*HTML*/
        `
        <article>
            <div class="image-container">
                <img src=${personaje.image}" alt="Perosnaje">
            </div>
                <h2>${personaje.name}</h2>
                <h3>${personaje.status}</h3>
        </article>
        `);

        const main = document.querySelector("main");
        main.append(article)
    });
})