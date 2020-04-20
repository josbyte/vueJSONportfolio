window.onload = function(){
    //load info
    $.getJSON( "../assets/portfolio.json", function( data ) {
        //var count = Object.keys(data.posts).length;
        $.each( data.posts, function( key, val ) {
            var postTitle=data.posts[key]["title"];
            var postDate=data.posts[key]["fecha"];
            var postText=data.posts[key]["cuerpo"];
            var title = document.createElement("h1");
            var date = document.createElement("p");
            var text = document.createElement("p");
            var commentButton = document.createElement("button")

            title.innerHTML=postTitle;
            title.style.display = "inline-block"
            commentButton.setAttribute("class", "w3-button w3-green")
            commentButton.style.display = "inline-block"
            commentButton.style.color = "white"
            commentButton.style.marginLeft = "50%"
            commentButton.innerHTML = " X comentarios"


            date.innerHTML="Publicado el "+postDate;
            text.innerHTML=postText;
            cuerpoPosts=document.getElementsByClassName("containerPost");
            if (cuerpoPosts[0]!=null){
                cuerpoPosts[0].appendChild(title)
                cuerpoPosts[0].appendChild(commentButton)
                cuerpoPosts[0].appendChild(date)
                cuerpoPosts[0].appendChild(text)
            }
        });
    });
}
