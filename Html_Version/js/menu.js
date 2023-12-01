
document.querySelectorAll('.menu').forEach(function(element) {
  element.addEventListener('click', function() {
      this.classList.toggle('open');
      document.querySelector('nav').classList.toggle('open');
  });
});
