const carousel = document.getElementById("carousel");
const images = carousel.children;
const totalImages = images.length;
let index = 0;

function updateCarousel() {
    const offset = -index * 100; // Move by 100% per image
    carousel.style.transform = `translateX(${offset}%)`;
}

document.getElementById("prev").addEventListener("click", () => {
    index = (index > 0) ? index - 1 : totalImages - 1;
    updateCarousel();
});

document.getElementById("next").addEventListener("click", () => {
    index = (index < totalImages - 1) ? index + 1 : 0;
    updateCarousel();
});

// Auto-slide every 3 seconds
setInterval(() => {
    index = (index < totalImages - 1) ? index + 1 : 0;
    updateCarousel();
}, 3000);