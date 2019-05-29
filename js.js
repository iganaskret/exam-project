const burgerMenu = document.querySelector(".burger-menu");
const hamburger = document.querySelector(".hamburger")
const barLogo = document.querySelector(".bar-logo")

hamburger.addEventListener("click", () => {
    burgerMenu.classList.toggle("hide");
     burgerMenu.style.zIndex = "1";

    barLogo.classList.toggle("hide");
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  };

  slides[slideIndex-1].style.display = "block";
};


