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

  var menuButton = document.querySelector('.site-header__toggle');
  var menu = document.querySelector('.site-header__nav');
  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      var open = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open', open);
      menuButton.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    menu.addEventListener('click', function (event) {
      if (!event.target.closest('a')) return;
      menu.classList.remove('is-open');
      menuButton.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Menü öffnen');
    });
  }

  var button = document.querySelector('.back-to-top');
  if (button) {
    var update = function () {
      button.classList.toggle('is-visible', window.scrollY > 250);
    };
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', update, { passive: true });
    update();
  }
})();
