window.onload = function () {
    console.log("tere")
    //http://myjson.dit.upm.es/api/bins/azjs
    fetch("http://myjson.dit.upm.es/api/bins/fo2q")
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

                /*let title = document.createElement("h3")
                let titleText = document.createTextNode(post.title)
                title.appendChild(titleText)
                postHeader.appendChild(title)*/

                // Adding profile picture to post's header
                let profilePic = document.createElement("img")
                profilePic.src = "res/images/logo.png"
                profilePic.alt = "logo"
                profilePic.className = "profilePic"
                postHeader.appendChild(profilePic)

                // Adding date of the post to post's header
                let time = document.createElement("p")
                let postTime = document.createTextNode(post.createTime)
                time.appendChild(postTime)
                postHeader.appendChild(time)

                // Adding post's image if provided in the json file
                if (post.image != null){
                    let postImg = document.createElement("img")
                    postImg.src = post.image
                    postImg.alt = post.image.split("/")[post.image.split("/").length-1]
                    postImg.className = "postPic"
                    postBodyContainer.appendChild(postImg)
                }
                // Adding post's text to post's body
                let postBody = document.createElement("p")
                let postText = document.createTextNode(post.post)
                postBody.appendChild(postText)
                postBodyContainer.appendChild(postBody)

                // Adding like button to post's footer
                let likeBtn = document.createElement("img")
                likeBtn.src = "res/images/like.png"
                likeBtn.alt = "like"
                likeBtn.className = "like"
                postFooter.appendChild(likeBtn)

                postContainer.appendChild(postHeader)
                postContainer.appendChild(postBodyContainer)
                postContainer.appendChild(postFooter)

                let feed = document.getElementById("feed")
                feed.appendChild(postContainer)
            }


        })



}