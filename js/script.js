document.querySelector("#search").addEventListener("keydown", function (e){
    if (e.keyCode == 13 && e.target.value == "American Psycho") {
        console.log(window.location.origin + "movies_pages/american_psycho/index.html");
        window.location.href = window.location.origin + "/movies_pages/american_psycho/index.html";
    } else{
        console.log("nao");
    }
})