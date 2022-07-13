// Carousel
const carousel = document.querySelector("#carousel");
const slides = Array.from(carousel.children);
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const firstImg = document.querySelector("#img-1");
const thirdImg = document.querySelector("#img-3");

if (firstImg.classList.contains("active")) {
  prevBtn.style.display = "none";
}

// Event Listeners
nextBtn.addEventListener("click", (e) => {
  const currentSlide = carousel.querySelector(".active");
  const nextSlide = currentSlide.nextElementSibling;

  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");

  prevBtn.style.display = "block";

  if (thirdImg.classList.contains("active")) {
    nextBtn.style.display = "none";
  }
});

prevBtn.addEventListener("click", (e) => {
  const currentSlide = carousel.querySelector(".active");
  const prevSlide = currentSlide.previousElementSibling;

  currentSlide.classList.remove("active");
  prevSlide.classList.add("active");

  nextBtn.style.display = "block";

  if (firstImg.classList.contains("active")) {
    prevBtn.style.display = "none";
  }
});
