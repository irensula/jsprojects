function readJson() {
    fetch("./games.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let div = document.getElementById("game-container");
        data.games.forEach(game => {
            
            let elementDiv = document.createElement("div");
            div.appendChild(elementDiv);
            elementDiv.classList.add("elementDiv");

            let link = document.createElement("a");
            link.innerHTML = game.game_name.fi;
            elementDiv.appendChild(link);
            link.setAttribute('id','link');

            //link
            const linkGame = document.getElementById("link");
            let url = 'http://127.0.0.1:5500/';
            let urlObj = new URL(url);
            let idGames = data.games[0].ID;
            urlObj.searchParams.append("id", idGames);
            linkGame.href = urlObj;

            let img = document.createElement('img');
            img.src = game.game_image;
            elementDiv.appendChild(img);

        });
    })
}

readJson();
 
// link

// const cameras = [{
//     _id: "Camera1"
// }];
// const linkProduct = document.getElementById("linkProduct");

// let url = 'file:///D:/openclassrooms/projet5/orinoco/product.html';
// let urlObj = new URL(url);
// let idCameras = cameras[0]._id;
// urlObj.searchParams.append("id", idCameras);
// linkProduct.href = urlObj;
// <a id="linkProduct">Click</a>