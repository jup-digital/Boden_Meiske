(function(){
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const header=document.getElementById('topbar');
const backToTop=document.querySelector('.back-to-top'),callFab=document.querySelector('.call-fab');
const onScroll=()=>{
 if(header)header.classList.toggle('scrolled',scrollY>40);
 const past=scrollY>Math.max(520,innerHeight*.65);
 if(backToTop)backToTop.classList.toggle('visible',past);
 if(callFab)callFab.classList.toggle('visible',past);
};
addEventListener('scroll',onScroll,{passive:true});onScroll();
const footerEl=document.querySelector('.footer');
if(backToTop&&footerEl)new IntersectionObserver(([e])=>backToTop.classList.toggle('on-footer',e.isIntersecting),{rootMargin:'0px 0px -60px 0px'}).observe(footerEl);
const submitBtn=document.querySelector('.contact-form [type=submit]');
if(submitBtn)new IntersectionObserver(([e])=>[backToTop,callFab].forEach(b=>b?.classList.toggle('near-cta',e.isIntersecting))).observe(submitBtn);
if(callFab&&footerEl)new IntersectionObserver(([e])=>callFab.classList.toggle('on-footer',e.isIntersecting)).observe(footerEl);
if(backToTop)backToTop.addEventListener('click',()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'}));

const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
if(toggle&&nav){toggle.onclick=()=>{const o=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',o)};nav.addEventListener('click',e=>{if(e.target.closest('a'))nav.classList.remove('open')})}

const reveals=[...document.querySelectorAll('.reveal')];
reveals.forEach(el=>{const i=[...el.parentElement.children].filter(c=>c.classList.contains('reveal')).indexOf(el);if(i>0&&!reduce)el.style.transitionDelay=Math.min(i,3)*90+'ms'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
reveals.forEach(el=>io.observe(el));

const mediaObserver=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('media-visible');mediaObserver.unobserve(e.target)}}),{threshold:.18});
document.querySelectorAll('.image-panel,.material-media,.faq-image').forEach(el=>mediaObserver.observe(el));

const steps=document.querySelector('.steps');
if(steps){const sio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){steps.classList.add('steps-visible');sio.disconnect()}}),{threshold:.22});sio.observe(steps)}

const refGrid=document.querySelector('[data-refs]'),refMore=document.querySelector('[data-refs-more]');
if(refGrid&&refMore)refMore.addEventListener('click',()=>{refGrid.classList.add('is-open');refMore.setAttribute('aria-expanded','true');refGrid.querySelector('.ref:nth-child(6) .ref-open')?.focus({preventScroll:true})});

const lb=document.querySelector('[data-lightbox]');
if(lb&&refGrid&&lb.showModal){
 const refs=[...refGrid.querySelectorAll('.ref')],img=lb.querySelector('[data-lb-img]');
 let cur=0,opener=null;
 const show=i=>{cur=(i+refs.length)%refs.length;const r=refs[cur],src=r.querySelector('img');img.src=src.currentSrc||src.src;img.alt=src.alt;lb.querySelector('[data-lb-title]').textContent=r.querySelector('figcaption b').textContent;lb.querySelector('[data-lb-detail]').textContent=r.querySelector('figcaption span').textContent;lb.querySelector('[data-lb-count]').textContent=String(cur+1).padStart(2,'0')+' / '+refs.length};
 refGrid.addEventListener('click',e=>{const b=e.target.closest('.ref-open');if(!b)return;opener=b;show(+b.dataset.ref);lb.showModal()});
 lb.querySelector('[data-lb-prev]').onclick=()=>show(cur-1);
 lb.querySelector('[data-lb-next]').onclick=()=>show(cur+1);
 lb.querySelector('[data-lb-close]').onclick=()=>lb.close();
 lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
 lb.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
 lb.addEventListener('close',()=>opener?.focus());
}

const parallax=[...document.querySelectorAll('.parallax-media')];
const footerSymbol=document.querySelector('.footer-symbol');
let tick=false;
function motion(){
 const vh=innerHeight;
 parallax.forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const p=((r.top+r.height/2)-vh/2)/vh;el.style.setProperty('--py',(p*-46)+'px')});
 if(footerSymbol){const r=footerSymbol.getBoundingClientRect();if(r.top<vh&&r.bottom>0){const p=(vh-r.top)/(vh+r.height);footerSymbol.style.transform=`translate3d(0,${(p-.5)*55}px,0) rotate(${-10+p*4}deg)`}}
 tick=false;
}
addEventListener('scroll',()=>{if(!tick&&!reduce){tick=true;requestAnimationFrame(motion)}},{passive:true});motion();



const layers=document.querySelector('[data-layers]');
if(layers){const lio=new IntersectionObserver(([e])=>{if(e.isIntersecting){layers.classList.add('in');lio.disconnect()}},{threshold:.6});lio.observe(layers)}

const navLinks=[...document.querySelectorAll('.nav a[href^="#"]:not(.nav-cta)')];
const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
if(sections.length){const nio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)navLinks.forEach(a=>{const on=a.getAttribute('href')==='#'+e.target.id;a.classList.toggle('is-current',on);on?a.setAttribute('aria-current','location'):a.removeAttribute('aria-current')})}),{rootMargin:'-45% 0px -50% 0px'});sections.forEach(s=>nio.observe(s))}

document.querySelectorAll('[data-topic]').forEach(a=>a.addEventListener('click',()=>{const t=document.querySelector('.contact-form textarea');if(t&&!t.value.trim())t.value='Anfrage zu: '+a.dataset.topic+'\n'}));

const materialRows=[...document.querySelectorAll('.material-row')];
if(materialRows.length){
 const mio=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-active',entry.isIntersecting)),{threshold:.42});
 materialRows.forEach(row=>mio.observe(row));
}

const form=document.querySelector('.contact-form'),status=form?.querySelector('.form-status');
if(form)form.addEventListener('submit',async e=>{
 e.preventDefault();
 if(!form.checkValidity()){form.reportValidity();return}
 if(form.elements._gotcha.value)return;
 const d=new FormData(form),endpoint=form.dataset.endpoint;
 // shortcut: without a form endpoint we fall back to the visitor's mail app; set data-endpoint once a form service is booked
 if(!endpoint){
  const body=`Name: ${d.get('name')}\nKontakt: ${d.get('kontakt')}\nOrt: ${d.get('ort')}\n\n${d.get('nachricht')}`;
  location.href=`mailto:info@boden-meiske.de?subject=${encodeURIComponent('Anfrage über boden-meiske.de')}&body=${encodeURIComponent(body)}`;
  status.textContent='Ihr E-Mail-Programm öffnet sich mit Ihrer Anfrage.';
  return;
 }
 const btn=form.querySelector('[type=submit]');btn.disabled=true;status.textContent='Wird gesendet …';
 try{
  const r=await fetch(endpoint,{method:'POST',body:d,headers:{Accept:'application/json'}});
  if(!r.ok)throw new Error(r.status);
  form.reset();
  status.textContent='Danke! Ihre Anfrage ist angekommen. Wir melden uns zeitnah bei Ihnen.';
 }catch(err){status.textContent='Das hat leider nicht geklappt. Bitte rufen Sie an: 0177 7091220.'}
 finally{btn.disabled=false}
});
addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus()}});
})();

// v70 Motion: Inhalte werden "verlegt" – sie schieben sich aus einer Maske ins Bild
(function(){
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const inView=(els,cb,opts)=>{const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){cb(e.target);o.unobserve(e.target)}}),opts||{threshold:.2});els.forEach(el=>o.observe(el))};

// Headlines Zeile für Zeile aus der Maske
const heads=[...document.querySelectorAll('.section-head h2,.contact h2,.footer h2,.faq h2')];
heads.forEach(h=>{h.innerHTML=h.innerHTML.split(/<br\s*\/?>/i).map((l,i)=>`<span class="line"><span class="line-in" style="--i:${i}">${l.trim()}</span></span>`).join(' ');h.classList.add('split')});
const hero=document.querySelector('.hero-split');
if(hero){[...hero.children].forEach((sp,i)=>{sp.innerHTML=`<span class="line-in" style="--i:${i}">${sp.innerHTML}</span>`;sp.classList.add('line')});hero.classList.add('split')}
inView(heads,h=>h.classList.add('is-in'),{threshold:.35});
const heroSec=document.querySelector('.hero-us');if(heroSec){void heroSec.offsetWidth;heroSec.classList.add('is-in')}

// Bilder öffnen sich per Clip-Path und setzen sich
const media=[...document.querySelectorAll('.image-panel,.mat-media,.faq-image,.ref-open,.service-thumb')];
media.forEach(m=>m.classList.add('clip'));
inView(media,m=>m.classList.add('is-in'),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
// "Alle Referenzen" macht weitere Bilder sichtbar: dort sofort öffnen
document.querySelector('[data-refs-more]')?.addEventListener('click',()=>requestAnimationFrame(()=>document.querySelectorAll('.ref .clip').forEach(m=>m.classList.add('is-in'))));

// Intro: Bild-Pillen und Fakten
const stmt=document.querySelector('.intro-statement');if(stmt)inView([stmt],el=>el.classList.add('is-in'),{threshold:.4});
const facts=document.querySelector('.facts');if(facts)inView([facts],el=>el.classList.add('is-in'),{threshold:.3});

// Scroll-Fortschritt und Header, der beim Runterscrollen Platz macht
const bar=document.querySelector('.scroll-progress'),top=document.getElementById('topbar'),nav=document.querySelector('.nav');
let lastY=scrollY,ticking=false;
const onScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;bar?.style.setProperty('--p',String(max>0?scrollY/max:0));
 if(top&&!reduce){const down=scrollY>lastY;top.classList.toggle('is-hidden',down&&scrollY>480&&!nav?.classList.contains('open'))}
 lastY=scrollY;ticking=false};
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
top?.addEventListener('focusin',()=>top.classList.remove('is-hidden'));

// Leistungs-Band: Inhalt einmal verdoppeln für eine nahtlose Schleife
const track=document.querySelector('.marquee-track');if(track)track.innerHTML+=track.innerHTML;

// Galerie-Cursor "Ansehen" (nur Maus, nicht bei reduzierter Bewegung)
const grid=document.querySelector('[data-refs]'),cur=document.querySelector('.ref-cursor');
if(grid&&cur&&!reduce&&matchMedia('(pointer: fine)').matches){
 grid.classList.add('has-cursor');
 grid.addEventListener('pointermove',e=>{const over=!!e.target.closest('.ref-open');cur.classList.toggle('is-on',over);cur.style.translate=`${e.clientX}px ${e.clientY}px`});
 grid.addEventListener('pointerleave',()=>cur.classList.remove('is-on'));
}
})();

// v83: sanfter Hero-Parallax (Bild und Headline laufen versetzt)
(function(){
 const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const hero=document.querySelector('.hero-us');if(!hero||rm)return;
 let tick=false;
 const update=()=>{
  const y=Math.min(scrollY,innerHeight*1.1);
  hero.style.setProperty('--hero-shift',(y*.16).toFixed(2)+'px');
  hero.style.setProperty('--hero-title-shift',(-y*.035).toFixed(2)+'px');
  tick=false;
 };
 addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(update)}},{passive:true});
 update();
})();

// v83: Intro-Zitat liest sich beim Scrollen Wort für Wort ein
(function(){
 const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const quote=document.querySelector('.intro-statement'),p=quote?.querySelector('p');
 if(!quote||!p||rm)return;
 quote.classList.add('intro-read');
 const walker=document.createTreeWalker(p,NodeFilter.SHOW_TEXT),nodes=[];
 while(walker.nextNode())nodes.push(walker.currentNode);
 nodes.forEach(node=>{
  const frag=document.createDocumentFragment();
  node.nodeValue.split(/(\s+)/).forEach(part=>{
   if(!part)return;
   if(/^\s+$/.test(part)){frag.appendChild(document.createTextNode(part));return}
   const w=document.createElement('span');w.className='w';w.textContent=part;frag.appendChild(w);
  });
  node.parentNode.replaceChild(frag,node);
 });
 const words=[...p.querySelectorAll('.w')];if(!words.length)return;
 let tick=false;
 const update=()=>{
  const r=quote.getBoundingClientRect(),start=innerHeight*.9,endCenter=innerHeight*.58;
  const span=Math.max(1,start-(endCenter-r.height/2));
  const prog=Math.max(0,Math.min(1,(start-r.top)/span));
  const n=Math.round(prog*words.length);
  words.forEach((w,i)=>w.classList.toggle('is-read',i<n));
  tick=false;
 };
 addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(update)}},{passive:true});
 addEventListener('resize',update);
 update();
})();
