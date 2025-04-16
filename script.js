let lastScrollY = window.scrollY;
const nav = document.querySelector('.nav-container');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY && currentScroll > 150) {
        nav.classList.add('nav-hidden');
    } else if (currentScroll < lastScrollY) {
        nav.classList.remove('nav-hidden');
    }

    lastScrollY = currentScroll;
});


const slideContainer = document.querySelector('.services-container');
const slides = document.querySelectorAll('.services-container img');
let currentIndex = Math.floor(slides.length / 3);

function highlightActiveSlide() {
    slides.forEach((img, index) => {
        img.classList.remove('active');
    });

    if (slides[currentIndex]) {
        slides[currentIndex].classList.add('active');
    }
}

function updateSlidePosition() {
    slideContainer.style.transform = `translateX(-${100 * currentIndex}%)`;
    highlightActiveSlide();
}

function nextSlide() {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
        updateSlidePosition();
    }

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
}

updateSlidePosition();