var slidIndex = 1;
showSlide(slidIndex);

// Next/previous controls
function plusSlide(m) {
  showSlide(slidIndex += m);
}

function currentSlide(m) {
  showSlide(slidIndex = m);
}

function showSlide(m) {
  var a;
  var slide = document.getElementsByClassName("mySlides5");
  if (m > slide.length) {slidIndex = 1}
  if (m < 1) {slidIndex = slide.length}
  for (a = 0; a < slide.length; a++) {
      slide[a].style.display = "none";
  }

  slide[slidIndex-1].style.display = "block";
};




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
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    slides[slideIndex - 1].style.display = "block";
};




