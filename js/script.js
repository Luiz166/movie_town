document.querySelector("#search").addEventListener("keydown", function (e){
    if (e.keyCode == 13 && e.target.value == "American Psycho") {
        if (window.location.origin.indexOf ("github") > 0){
            window.location.href = "https://luiz166.github.io/movie_town/movies_pages/american_psycho/index.html";
        }
        else{
            window.location.href = "http://127.0.0.1:5500/movies_pages/american_psycho/index.html";
        }
    }
    else if (e.keyCode == 13 && e.target.value == "Blade Runner 2049") {
        if (window.location.origin.indexOf ("github") > 0){
            window.location.href = "https://luiz166.github.io/movie_town/movies_pages/bladerunner2049/index.html";
        }
        else{
            window.location.href = "http://127.0.0.1:5500/movies_pages/bladerunner2049/index.html";
        }
    }
    else if (e.keyCode == 13 && e.target.value == "Drive") {
        if (window.location.origin.indexOf ("github") > 0){
            window.location.href = "https://luiz166.github.io/movie_town/movies_pages/drive/index.html";
        }
        else{
            window.location.href = "http://127.0.0.1:5500/movies_pages/drive/index.html";
        }
    }
    else if (e.keyCode == 13 && e.target.value == "NightCrawler") {
        if (window.location.origin.indexOf ("github") > 0){
            window.location.href = "https://luiz166.github.io/movie_town/movies_pages/nightcrawler/index.html";
        }
        else{
            window.location.href = "http://127.0.0.1:5500/movies_pages/nightcrawler/index.html";
        }
    }
    else if (e.keyCode == 13 && e.target.value == "Taxi Driver") {
        if (window.location.origin.indexOf ("github") > 0){
            window.location.href = "https://luiz166.github.io/movie_town/movies_pages/taxi_driver/index.html";
        }
        else{
            window.location.href = "http://127.0.0.1:5500/movies_pages/taxi_driver/index.html";
        }
    }
    else if (e.keyCode == 13 && e.target.value == "The Place Beyond the Pines") {
        if (window.location.origin.indexOf ("github") > 0){
            window.location.href = "https://luiz166.github.io/movie_town/movies_pages/tpbtp/index.html";
        }
        else{
            window.location.href = "http://127.0.0.1:5500/movies_pages/tpbtp/index.html";
        }
    }
    else if (e.keyCode == 13 && e.target.value == "Fight Club") {
        if (window.location.origin.indexOf ("github") > 0){
            window.location.href = "https://luiz166.github.io/movie_town/movies_pages/fight_club/index.html";
        }
        else{
            window.location.href = "http://127.0.0.1:5500/movies_pages/fight_club/index.html";
        }
    }
})