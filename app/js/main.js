document.addEventListener('wheel', function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, {passive: false});

document.addEventListener('keydown', function (event) {
  if ((event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) || event.key === 'F11') {
    event.preventDefault();
  }
});

document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#contact');
  const offset = 40;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
});