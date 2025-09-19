const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

const burger = document.getElementById('burger');
const links = document.getElementById('nav-links');
const icons = document.getElementById('nav-icons');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	links.classList.toggle('active');
	icons.classList.toggle('active');
});
