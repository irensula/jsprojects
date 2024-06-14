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
            elementDiv.appendChild(img)
        });
    })
}

readJson();
 
// link  
function createURL() { 
    let keyword = document.getElementById("keyword").value; 
    let url = "http://example.com/search?q=" + keyword; 
    window.location = url; 
}