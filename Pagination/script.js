 window.onload = function () {
    async function fetchJSONData() {
        const response = await fetch("./data.json");
        const data = await response.json();
        return data;
    }
    fetchJSONData().then((data) => {
        const JSONData = data;

const tableData = Array.from(Object.values(JSONData));
console.log(tableData);

let state = {
    'querySet': tableData,
    'page': 1,
    'rows': 5,
    'window': 5
}
buildTable()

function pagination(querySet, page, rows) {
    let trimStart = (page - 1) * rows
    let trimEnd = trimStart + rows
    let trimmedData = querySet.slice(trimStart, trimEnd)
    let pages = Math.ceil(querySet.length / rows)

    return{
        'querySet': trimmedData,
        'pages': pages
    }
}

function pageButtons(pages) {
    let wrapper = document.getElementById('pagination-wrapper')
    wrapper.innerHTML = ''

    let maxLeft = (state.page - Math.floor(state.window / 2))
    let maxRight = (state.page + Math.floor(state.window / 2))
    // not to go below 0
    if(maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
    }

    if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)

        maxRight = pages

        if(maxLeft < 1 ) {
            maxLeft = 1
        }
    }

    for (let page = maxLeft; page <= maxRight; page++) {
        wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info"> ${page}</button>`
    }
    if (state.page != 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171 Firts</button>` + wrapper.innerHTML
    }
    if (state.page != pages) {
        wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">&#187 Last</button>`
    }
    // $('.page').on('click', function() {
    //     $('#table-body').empty()
    //     state.page = Number($(this).val())

    //     buildTable()
    // })

    // var searchElement = document.createElement("div");
    // document.querySelector(".search-container").appendChild(searchElement);
    // searchElement.addEventListener("click", handleClick);
    let paginationWrapper = document.getElementById("pagination-wrapper");
    document.querySelector(".page").appendChild(page);
    page.addEventListener("click", handleClick);
    document.querySelector('.page').addEventListener("click", (e) => { 
        document.getElementById("table-body").empty()
        state.page = Number(this.value)

        buildTable()
    })
}

function buildTable() {
    // let table = $('#table-body')
    let table = document.getElementById('table-body')
    let data = pagination(state.querySet, state.page, state.rows)
    console.log('Data: ', data)
    
    let myList = data.querySet

    for(const i in myList) {
        let row = `<tr>
            <td>${myList[i].rank}</td>
            <td>${myList[i].first_name}</td>
            <td>${myList[i].last_name}</td>
        </tr>`
        table.append(row)
    }
    pageButtons(data.pages)
}
})
}


// https://www.youtube.com/watch?v=mslD-bpvjiU&t=9s
// https://www.youtube.com/watch?v=XI32vPPwSkU