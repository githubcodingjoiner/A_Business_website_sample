let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Loop back to the first slide
  }
  slides[slideIndex - 1].style.display = "block"; // Show the current slide
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function navigateSlides(n) {
  slideIndex += n;
  const slides = document.getElementsByClassName("slide");
  if (slideIndex < 1) {
    slideIndex = slides.length; // Go to the last slide
  } else if (slideIndex > slides.length) {
    slideIndex = 1; // Go to the first slide
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Attach event listeners to navigation buttons
document.querySelector(".prev").addEventListener("click", () => navigateSlides(-1));
document.querySelector(".next").addEventListener("click", () => navigateSlides(1));

// Initialize the slideshow
showSlides();
