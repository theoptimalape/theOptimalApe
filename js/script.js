// Carousel
const carousel = document.querySelector("#carousel");
const slides = Array.from(carousel.children);
const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");

// const slideWidth = slides[0].getBoundingClientRect().width;

nextBtn.addEventListener("click", (e) => {
  const currentSlide = carousel.querySelector(".active");
  const nextSlide = currentSlide.nextElementSibling;

  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");
});

prevBtn.addEventListener("click", (e) => {
  const currentSlide = carousel.querySelector(".active");
  const prevSlide = currentSlide.previousElementSibling;

  currentSlide.classList.remove("active");
  prevSlide.classList.add("active");
});
