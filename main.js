const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let timer = setInterval(nextSlide, 10000);

function showSlide(index) {
  clearInterval(timer); // Limpa o timer anterior antes de iniciar um novo
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  timer = setInterval(nextSlide, 10000); // Inicia o timer para mudar o slide a cada 5000ms (5 segundos)
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  console.log("aaaaaaaaaa")
}

document.getElementById('next').addEventListener('click', () => {
  nextSlide();
});

// document.getElementById('prev').addEventListener('click', () => {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// });

showSlide(currentSlide);