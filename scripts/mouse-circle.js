const circle = document.querySelector('.mouse-circle');

window.addEventListener('mousemove', (e) => {
  circle.style.left = e.clientX + 'px';
  circle.style.top  = e.clientY + 'px';
});