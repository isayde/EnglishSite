function showSlide(wrapperId, index) {
    var sliderWrapper = document.getElementById(wrapperId);
    var slideSets = sliderWrapper.querySelectorAll('.slide-set');
    var slidesPerPage = 3;

    var translateValue = -index * (100 / slidesPerPage) + '%';
    sliderWrapper.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide(wrapperId) {
    var sliderWrapper = document.getElementById(wrapperId);
    var slideSets = sliderWrapper.querySelectorAll('.slide-set');
    var totalSets = slideSets.length;
    var slidesPerPage = 3;

    var currentIndex = parseInt(sliderWrapper.getAttribute('data-currentIndex')) || 0;
    currentIndex = Math.max(0, (currentIndex - slidesPerPage + totalSets) % totalSets);
    sliderWrapper.setAttribute('data-currentIndex', currentIndex);
    showSlide(wrapperId, currentIndex * slidesPerPage);
}

function nextSlide(wrapperId) {
    var sliderWrapper = document.getElementById(wrapperId);
    var slideSets = sliderWrapper.querySelectorAll('.slide-set');
    var totalSets = slideSets.length;
    var slidesPerPage = 3;

    var currentIndex = parseInt(sliderWrapper.getAttribute('data-currentIndex')) || 0;
    currentIndex = (currentIndex + 1) % totalSets;
    sliderWrapper.setAttribute('data-currentIndex', currentIndex);
    showSlide(wrapperId, currentIndex * slidesPerPage);
}

function mostrarOverlay(overlayId) {
    var overlay = document.getElementById(overlayId);
    overlay.style.display = 'flex';
}

function esconderOverlay(overlayId) {
    var overlay = document.getElementById(overlayId);
    overlay.style.display = 'none';
}