
const search = document.getElementById("search")
const button = document.getElementById("btn")
const resul = document.getElementById("result-search")

button.addEventListener("click", function (){

    const url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&formatversion=2&srsearch=${search.value}&srnamespace=0&srlimit=4`

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json.query.search)
            // resul.innerHTML = json.query.search[0].snippet;
            json.query.search.forEach(elem => {
                const title = document.createElement("h3")
                title.innerHTML = elem.title
                const paragraph = document.createElement("p")
                paragraph.innerHTML = elem.snippet
                const card = document.createElement("article")
                card.className = "card"
                const link = document.createElement("a")
                link.innerHTML = `Acessar artigo`
                link.href = `https://en.wikipedia.org/wiki/?curid=${elem.pageid}`
                link.target = `_blank`
                card.appendChild(title)
                card.appendChild(paragraph)
                card.appendChild(link)
                resul.appendChild(card)
            })
        })
})