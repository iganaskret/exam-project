//fetching

let illustration = "https://andreamakarova.dk/kea/wp-exam/wp-json/wp/v2/illustration?_embed&per_page=20";
const template2 = document.querySelector("#template2").content;
const parent2 = document.querySelector("#main2");

function loadData(){
fetch(illustration).then(e => e.json()).then(show);
}

function show(data){
data.forEach(post => {



    //clone
    const clone2 = template2.cloneNode(true);
    //populate
    const img2 = clone2.querySelector("#img2");


    img2.src = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;



    //append
    parent2.appendChild(clone2);
}
);
}

loadData(illustration);
