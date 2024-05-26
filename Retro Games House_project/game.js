function readJson() {
    fetch("./games.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let div = document.getElementById("root");
        data.games.forEach(game => {
            
            let element = document.createElement("p");
            element.innerHTML = game.game_name.fi;
            div.appendChild(element);

            let img = document.createElement('img');
            img.src = game.game_image;
            div.appendChild(img)
        });
    })
}

readJson();