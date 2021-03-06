//fetching

let Tshirt = "https://andreamakarova.dk/kea/wp-exam/wp-json/wp/v2/T-shirt?_embed&per_page=20";
const template1 = document.querySelector("#template1").content;
const parent1 = document.querySelector("#main1");



function loadData() {
    fetch(Tshirt).then(e => e.json()).then(show);
}

function show(data) {
    data.forEach(post => {

console.log(post);

        //clone
        const clone1 = template1.cloneNode(true);
        //populate
        const img1 = clone1.querySelector("#img1");
        const title = clone1.querySelector(".modal-title");
        const description = clone1.querySelector(".modal-description");


        img1.src = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;


        title.textContent = post.title.rendered;
        description.innerHTML = post.content.rendered;


        console.log(post);



        //append
        parent1.appendChild(clone1);
    });
}

loadData(Tshirt);



