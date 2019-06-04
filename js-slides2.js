var slideIndex = -1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(m) {
    showSlides(slideIndex += m);
}

// Thumbnail image controls
function currentSlide(m) {
    showSlides(slideIndex = m);
}

function showSlides(m) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    if (m > slides.length) {
        slideIndex = 1
    }
    if (m < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    slides[slideIndex - 1].style.display = "block";
};
