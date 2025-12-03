const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    })
})

elements.forEach(el => observer.observe(el));

const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

function updateCarousel(index){
    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
}

nextBtn.addEventListener('click', () => {
    let newIndex = currentIndex + 1;
    if(newIndex >= slides.length) newIndex = 0;
    updateCarousel(newIndex);
});

prevBtn.addEventListener('click', () => {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = slides.length - 1;
  updateCarousel(newIndex);
});

window.addEventListener('resize', () => updateCarousel(currentIndex));
window.addEventListener('load', () => updateCarousel(currentIndex));

setInterval(() => {
    let newIndex = currentIndex + 1;
    if(newIndex >= slides.length) newIndex = 0;
    updateCarousel(newIndex);
}, 4000)
