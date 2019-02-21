const main=document.querySelector("#posters");
const template=document.querySelector("#poster-template").content;
const link = "https://spreadsheets.google.com/feeds/list/1Zai3AoYR3yQ7zoGiXeiOVQnmLlf3vQjiQ_ELSgVlJkg/od6/public/values?alt=json";
const modal =document.querySelector("#modal");
const hoverinfo =document.querySelector("#hoverinfo");



function loadJSON(link) {
    fetch(link).then(e=>e.json()).then(data=>data.feed.entry.forEach(displayTarData));
}

function displayTarData(data){
    console.log(data);
    const clone=template.cloneNode("true");

    clone.querySelector(".poster").src=data.gsx$movieposter.$t;
    clone.querySelector(".year").textContent=data.gsx$releaseyear.$t;
    clone.querySelector(".imdb").textContent=data.gsx$imdb.$t;
    clone.querySelector(".title").textContent=data.gsx$title.$t;
    clone.querySelector(".age-rating").textContent=data.gsx$ageRating.$t;
    clone.querySelector(".year").textContent=data.gsx$releaseYear.$t;
    clone.querySelector(".genres").textContent=data.gsx$genres.$t;
    clone.querySelector(".shortDescription").textContent=data.gsx$leadroles.$t;

    clone.querySelector(".poster").addEventListener("click", ()=>{
        hoverInfoShow(data);
            });

    function hoverInfoShow(data){
        hoverinfo.classList.remove("inactive");
        hoverinfo.querySelector(".imdb").textContent=data.gsx$imdb.$t;
        hoverinfo.querySelector(".title").textContent=data.gsx$title.$t;
        hoverinfo.querySelector(".age-rating").textContent=data.gsx$agerating.$t;
        hoverinfo.querySelector(".year").textContent=data.gsx$releaseyear.$t;
        hoverinfo.querySelector(".genres").textContent=data.gsx$genres.$t;
        hoverinfo.querySelector(".shortDescription").textContent=data.gsx$leadroles.$t;
    

    //clone.querySelector(".poster").addEventListener("mouseout", ()=>{
    //    hoverInfoHide(data);
    //        });

    //    function hoverInfoHide(){
    //        hoverinfo.classList.add("inactive");
    //        }
    
        hoverinfo.querySelector("#readmore").addEventListener("click", ()=>{
        modalInfoShow(data);
            });
    }

    function modalInfoShow(data){
        modal.classList.remove("inactive");
        modal.querySelector(".poster").src=data.gsx$movieposter.$t;
        modal.querySelector(".title").textContent=data.gsx$title.$t;
        modal.querySelector(".age-rating").textContent=data.gsx$agerating.$t;
        modal.querySelector(".length").textContent=data.gsx$length.$t;
        modal.querySelector(".prodcom").textContent=data.gsx$productioncompanies.$t;
        modal.querySelector(".genres").textContent=data.gsx$genres.$t;
        modal.querySelector(".leadroles").textContent=data.gsx$leadroles.$t;
        modal.querySelector(".year").textContent=data.gsx$releaseyear.$t;
        modal.querySelector(".longdescription").textContent=data.gsx$stotyline.$t;

        modal.querySelector("#exitmodal").addEventListener("click", ()=>{
    modalInfoHide(data);
        });

    function modalInfoHide(){
        modal.classList.add("inactive");
        }
    }

        
    main.appendChild(clone);
}

loadJSON(link);


