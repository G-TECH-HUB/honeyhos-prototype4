const openNavBtn = document.getElementById("open-nav");
const closeNavBtn = document.getElementById("close-nav");
const nav = document.querySelector("nav");
const header = document.querySelector("header");

openNavBtn.addEventListener("click", () => {
  nav.classList.add("open");
  header.classList.add("nav-open");
});

closeNavBtn.addEventListener("click", () => {
  nav.classList.remove("open");
  header.classList.remove("nav-open");
});

// Close dropdowns when another one opens (optional)
const detailsElements = document.querySelectorAll("nav details");
detailsElements.forEach((currentDetails) => {
  currentDetails.addEventListener("toggle", function () {
    if (this.open) {
      detailsElements.forEach((otherDetails) => {
        if (otherDetails !== currentDetails && otherDetails.open) {
          otherDetails.removeAttribute("open");
        }
      });
    }
  });
});


const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0;
const cards = document.querySelectorAll(".job-card");

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  if (index < cards.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Swipe support
let startX = 0;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && index < cards.length - 1) {
    index++;
  } else if (endX - startX > 50 && index > 0) {
    index--;
  }
  updateCarousel();
});
