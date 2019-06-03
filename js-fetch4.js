//fetching

let prints = "https://andreamakarova.dk/kea/wp-exam/wp-json/wp/v2/print?_embed&per_page=25";
const template4 = document.querySelector("#template4").content;
const parent4 = document.querySelector("#main4");

function loadData() {
    fetch(prints).then(e => e.json()).then(show);
}

function show(data) {
    data.forEach(post => {



        //clone
        const clone4 = template4.cloneNode(true);
        //populate
        const img4 = clone4.querySelector("#img4");
        const title = clone4.querySelector(".modal-title");
        const description = clone4.querySelector(".modal-description");


        img4.src = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;


        title.textContent = post.title.rendered;
        description.innerHTML = post.content.rendered;


        //append
        parent4.appendChild(clone4);
    });
}

loadData(prints);
