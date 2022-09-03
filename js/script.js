document.querySelector("#search").addEventListener("keydown", function (e){
    if (e.keyCode == 13 && e.target.value == "American Psycho") {
        console.log(window.location.origin + "movies_pages/american_psycho/index.html");
        if (window.location.origin.indexOf ("github") > 0){
            window.location.href = "https://luiz166.github.io/movie_town/movies_pages/american_psycho/index.html";
        }
        else{
            window.location.href = "http://127.0.0.1:5500/movies_pages/american_psycho/index.html";
        }
    } else{
        console.log("nao");
    }
})