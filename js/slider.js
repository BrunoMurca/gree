let slideIndex = 0;
showSlides();

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-100 * slideIndex}%)`;
    });

    // Automatic slide change every 5 seconds
    setTimeout(() => {
        slideIndex++;
        showSlides();
    }, 5000); // 5000ms = 5 seconds
}
