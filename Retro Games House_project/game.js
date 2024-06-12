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

            let img = document.createElement('img');
            img.src = game.game_image;
            elementDiv.appendChild(img);

            let description = document.createElement("p");
            description.innerHTML = game.description.fi;
            elementDiv.appendChild(description);

            let genre = document.createElement("p");
            genre.innerHTML = game.genre;
            elementDiv.appendChild(genre);

            let publisher = document.createElement("p");
            publisher.innerHTML = game.publisher;
            elementDiv.appendChild(publisher);

            let launched_year = document.createElement("p");
            launched_year.innerHTML = game.launched_year;
            elementDiv.appendChild(launched_year);

            let original_platforms = document.createElement("p");
            original_platforms.innerHTML = original_platforms;
            elementDiv.appendChild(original_platforms);

            let added_to_hall_of_fame = document.createElement("p");
            added_to_hall_of_fame.innerHTML = game.added_to_hall_of_fame;
            elementDiv.appendChild(added_to_hall_of_fame);
        });
    })
}

readJson();