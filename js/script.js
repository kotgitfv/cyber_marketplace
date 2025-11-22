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



const slides = document.querySelector('.tovar__items');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slides.scrollTo({
      left: slides.clientWidth * index,
      behavior: 'smooth'
    });

    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

slides.addEventListener('scroll', () => {
  const index = Math.round(slides.scrollLeft / slides.clientWidth);
  dots.forEach(d => d.classList.remove('active'));
  if(dots[index]) dots[index].classList.add('active');
});


const sliderTrack = document.querySelector('.tovar__items');
const sliderDots = document.querySelectorAll('.dot');

function updateActiveDot(index) {
  sliderDots.forEach(dot => dot.classList.remove('active'));
  if (sliderDots[index]) sliderDots[index].classList.add('active');
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderTrack.scrollTo({
      left: sliderTrack.clientWidth * index,
      behavior: 'smooth'
    });
    updateActiveDot(index);
  });
});

sliderTrack.addEventListener('scroll', () => {
  const index = Math.round(sliderTrack.scrollLeft / sliderTrack.clientWidth);
  updateActiveDot(index);
});




const input = document.querySelector('#search');
const text = input.value;

input.addEventListener('input', function(e) {
  e.preventDefault();
  console.log(text)
});

