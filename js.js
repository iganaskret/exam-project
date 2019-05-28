const burgerMenu = document.querySelector(".burger-menu");
const hamburger = document.querySelector(".hamburger")
const barLogo = document.querySelector(".bar-logo")
hamburger.addEventListener("click", () => {
    burgerMenu.classList.toggle("hide");
    barLogo.classList.toggle("hide")
});
