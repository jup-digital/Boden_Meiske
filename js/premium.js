(function(){
  var header=document.getElementById('site-header');
  var onScroll=function(){if(header)header.classList.toggle('is-scrolled',window.scrollY>60)};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var cards=[].slice.call(document.querySelectorAll('.service-card,.material-card,.premium-references figure'));
  cards.forEach(function(card){
    card.addEventListener('pointermove',function(e){
      var r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      card.style.setProperty('--mx',(x*7).toFixed(2)+'deg');card.style.setProperty('--my',(y*-7).toFixed(2)+'deg');
    });
    card.addEventListener('pointerleave',function(){card.style.removeProperty('--mx');card.style.removeProperty('--my')});
  });

  var statements=[].slice.call(document.querySelectorAll('.statement-band p,.quote-text'));
  var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting)entry.target.classList.add('is-visible')})},{threshold:.25});
  statements.forEach(function(el){io.observe(el)});
})();
