const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    menuOverlay.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('open');
});
