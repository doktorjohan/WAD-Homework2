
console.log("tere")

fetch("http://myjson.dit.upm.es/api/bins/azjs")
    .then(response => response.json())
    .then(json => {

        for (let post of json) {

            let postContainer = document.createElement("div")
            postContainer.className = "post"
            let title = document.createElement("h3")
            let titleText = document.createTextNode(post.title)
            title.appendChild(titleText)

            let postBody = document.createElement("p")
            let postText = document.createTextNode(post.body)
            postBody.appendChild(postText)

            postContainer.appendChild(title)
            postContainer.appendChild(postBody)

            let feed = document.getElementsByClassName("feed")[0]
            feed.appendChild(postContainer)
        }



    })