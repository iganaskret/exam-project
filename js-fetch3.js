//fetching

let others = "https://andreamakarova.dk/kea/wp-exam/wp-json/wp/v2/others?_embed&per_page=20";
const template3 = document.querySelector("#template3").content;
const parent3 = document.querySelector("#main3");

function loadData(){
fetch(others).then(e => e.json()).then(show);
}

function show(data){
data.forEach(post => {



    //clone
    const clone3 = template3.cloneNode(true);
    //populate
    const img3 = clone3.querySelector("#img3");


    img3.src = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;



    //append
    parent3.appendChild(clone3);
}
);
}

loadData(others);
