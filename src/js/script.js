window.onload = function () {
    console.log("tere")

    fetch("http://myjson.dit.upm.es/api/bins/azjs")
        .then(response => response.json())
        .then(json => {

            for (let post of json) {

                let postContainer = document.createElement("div")
                postContainer.className = "post"

                let postHeader = document.createElement("div")
                postHeader.className = "postHeader"

                let postBodyContainer = document.createElement("div")
                postBodyContainer.className = "postBody"

                let postFooter = document.createElement("div")
                postFooter.className = "postFooter"

                let title = document.createElement("h3")
                let titleText = document.createTextNode(post.title)
                title.appendChild(titleText)
                postHeader.appendChild(title)

                let postBody = document.createElement("p")
                let postText = document.createTextNode(post.post)
                postBody.appendChild(postText)
                postBodyContainer.appendChild(postBody)

                postContainer.appendChild(postHeader)
                postContainer.appendChild(postBody)
                postContainer.appendChild(postFooter)

                let feed = document.getElementById("feed")
                feed.appendChild(postContainer)
            }


        })
}