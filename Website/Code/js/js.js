const main=document.querySelector("#posters");
const template=document.querySelector("#poster-template").content;
const link = "https://spreadsheets.google.com/feeds/list/1Zai3AoYR3yQ7zoGiXeiOVQnmLlf3vQjiQ_ELSgVlJkg/od6/public/values?alt=json";
const modal =document.querySelector("#modal");



function loadJSON(link) {
    fetch(link).then(e=>e.json()).then(data=>data.feed.entry.forEach(displayTarData));
}

function displayTarData(data){
    console.log(data);
    const clone=template.cloneNode("true");

    clone.querySelector("#poster").src=data.gsx$movieposter.$t;
    document.querySelector("#posters").addEventListener("click", hoverInfoShow);

    document.querySelector("#hoverinfo").addEventListener("click", ()=>{
        fetch(link+data.id).then(e=>e.json()).then(data=>hoverInfoShow(data));
            });

    function hoverInfoShow(film){
        hoverinfo.classList.remove("inactive");
        hoverinfo.querySelector("#imdb").textContent=film.gsx$imdb.$t;
        hoverinfo.querySelector("#title").textContent=film.gsx$title.$t;
        hoverinfo.querySelector("#age-rating").textContent=film.gsx$ageRating.$t;
        hoverinfo.querySelector("#year").textContent=film.gsx$releaseYear.$t;
        hoverinfo.querySelector("#genres").textContent=film.gsx$genres.$t;
        hoverinfo.querySelector("#short description").textContent=film.gsx$leadroles.$t;
    
        
    }

    main.appendChild(clone);
}

loadJSON(link);


