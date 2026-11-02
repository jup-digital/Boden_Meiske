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
reveals.forEach((el,i)=>el.dataset.delay=String((i%4)+1));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
reveals.forEach(el=>io.observe(el));

const mediaObserver=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('media-visible');mediaObserver.unobserve(e.target)}}),{threshold:.18});
document.querySelectorAll('.image-panel,.material-media,.faq-image').forEach(el=>mediaObserver.observe(el));

const steps=document.querySelector('.steps');
if(steps){const sio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){steps.classList.add('steps-visible');sio.disconnect()}}),{threshold:.22});sio.observe(steps)}

const gallery=document.querySelector('[data-gallery]');
if(gallery){
 const step=()=>Math.min(gallery.clientWidth*.72,650);
 document.querySelector('[data-gallery-next]')?.addEventListener('click',()=>gallery.scrollBy({left:step(),behavior:'smooth'}));
 document.querySelector('[data-gallery-prev]')?.addEventListener('click',()=>gallery.scrollBy({left:-step(),behavior:'smooth'}));
 let down=false,startX=0,startLeft=0;
 gallery.addEventListener('pointerdown',e=>{down=true;gallery.classList.add('is-dragging');startX=e.clientX;startLeft=gallery.scrollLeft;gallery.setPointerCapture(e.pointerId)});
 gallery.addEventListener('pointermove',e=>{if(down)gallery.scrollLeft=startLeft-(e.clientX-startX)});
 ['pointerup','pointercancel','pointerleave'].forEach(ev=>gallery.addEventListener(ev,()=>{down=false;gallery.classList.remove('is-dragging')}));
}

const parallax=[...document.querySelectorAll('.parallax-media')];
const hero=document.querySelector('.motion-hero');
const footerSymbol=document.querySelector('.footer-symbol');
let tick=false;
function motion(){
 const vh=innerHeight;
 parallax.forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;const p=((r.top+r.height/2)-vh/2)/vh;el.style.setProperty('--py',(p*-46)+'px')});
 if(hero){const y=Math.min(scrollY,innerHeight);hero.style.transform=`translate3d(0,${y*.075}px,0) rotate(${y*.002}deg)`;hero.style.opacity=String(Math.max(.38,1-y/innerHeight*.62))}
 if(footerSymbol){const r=footerSymbol.getBoundingClientRect();if(r.top<vh&&r.bottom>0){const p=(vh-r.top)/(vh+r.height);footerSymbol.style.transform=`translate3d(0,${(p-.5)*55}px,0) rotate(${-10+p*4}deg)`}}
 tick=false;
}
addEventListener('scroll',()=>{if(!tick&&!reduce){tick=true;requestAnimationFrame(motion)}},{passive:true});motion();

if(!reduce&&hero){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;hero.querySelector('img').style.transform=`rotate(${-4+x*4}deg) translate3d(${x*12}px,${y*10}px,0)`});hero.addEventListener('pointerleave',()=>hero.querySelector('img').style.transform='rotate(-4deg)')}


const materialRows=[...document.querySelectorAll('.material-row')];
if(materialRows.length){
 const mio=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-active',entry.isIntersecting)),{threshold:.42});
 materialRows.forEach(row=>mio.observe(row));
}

const upload=document.querySelector('input[type=file]'),label=document.querySelector('[data-upload-label]');
if(upload&&label)upload.onchange=()=>label.textContent=upload.files.length?upload.files.length+' Bild(er) ausgewählt':'Noch keine Bilder ausgewählt';
const form=document.querySelector('.contact-form'),status=form?.querySelector('.form-status');
if(form)form.addEventListener('submit',async e=>{
 e.preventDefault();
 if(!form.checkValidity()){form.reportValidity();return}
 if(form.elements._gotcha.value)return;
 const d=new FormData(form),endpoint=form.dataset.endpoint;
 // shortcut: without a form endpoint we fall back to the visitor's mail app (no attachments); set data-endpoint once a form service is booked
 if(!endpoint){
  const body=`Name: ${d.get('name')}\nKontakt: ${d.get('kontakt')}\nOrt & Fläche: ${d.get('projekt')}\n\n${d.get('nachricht')}`;
  location.href=`mailto:info@boden-meiske.de?subject=${encodeURIComponent('Anfrage über boden-meiske.de')}&body=${encodeURIComponent(body)}`;
  status.textContent=upload?.files.length?'Ihr E-Mail-Programm öffnet sich. Bitte hängen Sie die Bilder dort noch einmal an.':'Ihr E-Mail-Programm öffnet sich mit Ihrer Anfrage.';
  return;
 }
 const btn=form.querySelector('[type=submit]');btn.disabled=true;status.textContent='Wird gesendet …';
 try{
  const r=await fetch(endpoint,{method:'POST',body:d,headers:{Accept:'application/json'}});
  if(!r.ok)throw new Error(r.status);
  form.reset();if(label)label.textContent='Noch keine Bilder ausgewählt';
  status.textContent='Danke! Ihre Anfrage ist angekommen. Ich melde mich zeitnah bei Ihnen.';
 }catch(err){status.textContent='Das hat leider nicht geklappt. Bitte rufen Sie an: 0177 7091220.'}
 finally{btn.disabled=false}
});
addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus()}});
})();
