function readJson() {
    fetch("./games.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let div = document.getElementById("root");
        data.games.forEach(game => {
            
            let elementDiv = document.createElement("div");
            div.appendChild(elementDiv);

            let elementH2 = document.createElement("h2");
            elementH2.innerHTML = game.game_name.fi;
            elementDiv.appendChild(elementH2);
            elementH2.setAttribute('class','title');

            let img = document.createElement('img');
            img.src = game.game_image;
            elementDiv.appendChild(img);
            img.classList.add("gameImg");

            let infoDiv = document.createElement("div");
            elementDiv.appendChild(infoDiv);
            infoDiv.setAttribute('class', 'infoDiv')

            let description = document.createElement("p");
            description.innerHTML = game.description.fi;
            infoDiv.appendChild(description);

            let genre = document.createElement("p");
            genre.innerHTML = 'Genre: ' + game.genre;
            infoDiv.appendChild(genre);

            let publisher = document.createElement("p");
            publisher.innerHTML = 'Kustantaja: ' + game.publisher;
            infoDiv.appendChild(publisher);

            let launched_year = document.createElement("p");
            launched_year.innerHTML = 'Vuosi: ' + game.launched_year;
            infoDiv.appendChild(launched_year);

            let original_platforms = document.createElement("p");
            original_platforms.innerHTML = 'Alkuperäiset alustat: ' + game.original_platforms;
            infoDiv.appendChild(original_platforms);

            let added_to_hall_of_fame = document.createElement("p");
            added_to_hall_of_fame.innerHTML = 'Lisätty Hall of Fameen: ' + game.added_to_hall_of_fame;
            infoDiv.appendChild(added_to_hall_of_fame);
        });
    })
}

readJson();