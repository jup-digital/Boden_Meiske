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


  /* Selected image names in the contact form. */
  var upload = document.querySelector('.contact-upload__input');
  var uploadStatus = document.querySelector('.contact-upload__files');
  if (upload && uploadStatus) {
    upload.addEventListener('change', function () {
      var files = Array.prototype.slice.call(upload.files || []);
      if (!files.length) {
        uploadStatus.textContent = 'Noch keine Bilder ausgewählt';
        return;
      }
      uploadStatus.textContent = files.length === 1
        ? files[0].name
        : files.length + ' Bilder ausgewählt';
    });
  }

  /* Lightweight Framer-inspired parallax, driven by one animation frame. */
  var ambientSections = Array.prototype.slice.call(document.querySelectorAll('.brand-ambient'));
  var heroSymbol = document.querySelector('.hero-heading-row .hero-symbol');
  var zoomImages = Array.prototype.slice.call(document.querySelectorAll('.image-zoom'));
  var ticking = false;
  function updateMotion() {
    var vh = window.innerHeight || 1;
    ambientSections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      var progress = (vh - rect.top) / (vh + rect.height);
      var shift = Math.max(-55, Math.min(55, (progress - 0.5) * 105));
      section.style.setProperty('--ambient-y', shift.toFixed(1) + 'px');
    });
    if (heroSymbol) {
      var heroRect = heroSymbol.getBoundingClientRect();
      var heroShift = Math.max(-18, Math.min(28, (heroRect.top / vh) * 28));
      heroSymbol.style.setProperty('--hero-symbol-y', heroShift.toFixed(1) + 'px');
      heroSymbol.style.setProperty('--hero-symbol-r', (heroShift * -0.035).toFixed(2) + 'deg');
    }
    zoomImages.forEach(function (frame) {
      var rect = frame.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;
      var imageShift = ((rect.top + rect.height / 2) - vh / 2) / vh * -18;
      frame.style.setProperty('--image-parallax', imageShift.toFixed(1) + 'px');
    });
    ticking = false;
  }
  function requestMotion() {
    if (ticking || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    ticking = true;
    window.requestAnimationFrame(updateMotion);
  }
  window.addEventListener('scroll', requestMotion, { passive: true });
  window.addEventListener('resize', requestMotion, { passive: true });
  requestMotion();

})();
