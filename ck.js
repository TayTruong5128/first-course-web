document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            removeActiveClass();
            link.classList.add('active');
        });
    });
x
    function removeActiveClass() {
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
    }
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

setInterval(() => changeSlide(1), 5000);