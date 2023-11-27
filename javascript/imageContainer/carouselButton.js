let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let idx;
  let slides = document.getElementsByClassName("photoCarousel");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (idx = 0; idx < slides.length; idx++) {
    slides[idx].style.display = "none";
  }
  for (idx = 0; idx < dots.length; idx++) {
    dots[idx].className = dots[idx].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function sliderZoomInAndOut() {
  let idx;
  let picture = document.getElementsByClassName("collectionsOfPhotos")
  picture[0].className += " active";
  for (idx = 0; idx < picture.length; idx++) {
    picture[idx];
  }
}
