let slideIndex = 0;
const slides = document.querySelectorAll('.card');
const totalSlides = slides.length;

function showSlides() {
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const slideWidth = slides[0].clientWidth;
    const offset = -slideIndex * slideWidth;

    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

// Initially show slides
showSlides();
