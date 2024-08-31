const taglines = [
    "Food for the Soul,",
    "Where Every Bite Counts,",
    "Fresh, Flavorful, Fantastic,",
    "Passion on Every Plate,",
    "Celebrate the Art of Eating."
];

let currentTaglineIndex = 0;
let container = document.getElementById('taglines');

function typeTagline(tagline, index) {
    if (index < taglines.length) {
        let tagElement = document.createElement('h3');
        tagElement.classList.add('tagline', 'gwendolyn-regular');
        tagElement.textContent = tagline;
        container.appendChild(tagElement);
        setTimeout(() => typeTagline(taglines[index + 1], index + 1), 3000);
    } else {
        setTimeout(() => clearTaglines(taglines.length - 1), 3000);
    }
}

function clearTaglines(index) {
    let tags = container.querySelectorAll('h3');
    if (index >= 0) {
        tags[index].remove();
        setTimeout(() => clearTaglines(index - 1), 1000); // Clear lines faster
    } else {
        setTimeout(() => typeTagline(taglines[0], 0), 1000); // Restart typing animation
    }
}

typeTagline(taglines[0], 0);

let slideIndex = 0;
const slides = document.querySelectorAll('.menu_item');
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
