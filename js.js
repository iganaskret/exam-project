const burgerMenu = document.querySelector(".burger-menu");
const hamburger = document.querySelector(".hamburger");
const barLogo = document.querySelector(".bar-logo");
const modalSizes = document.querySelector(".modal-sizes-bckg");
const size = document.querySelector("#size");
const details = document.querySelector("#button1");
const modal = document.querySelector("#modal");

<<<<<<< HEAD

details.addEventListener("click", () => modal.classList.remove("hide"));
modalSizes.addEventListener("click", () => modalSizes.classList.add("hide"));
size.addEventListener("click", () => modalSizes.classList.remove("hide"));

=======
>>>>>>> origin/master
hamburger.addEventListener("click", () => {
    burgerMenu.classList.toggle("hide");
    burgerMenu.style.zIndex = "1";

    barLogo.classList.toggle("hide");
});


<<<<<<< HEAD
=======
modalSizes.addEventListener("click", () => modalSizes.classList.add("hide"));
size.addEventListener("click", () => modalSizes.classList.remove("hide"));

>>>>>>> origin/master
