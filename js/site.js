(function () {
  function scrollToTarget(id) {
    var target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link) return;
    var id = link.getAttribute('href').slice(1);
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    scrollToTarget(id);
  });

  var button = document.querySelector('.back-to-top');
  if (button) {
    var update = function () {
      button.classList.toggle('is-visible', window.scrollY > 600);
    };
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', update, { passive: true });
    update();
  }
})();
