(function(){
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const header=document.getElementById('topbar');
const onScroll=()=>header&&header.classList.toggle('scrolled',scrollY>40);
addEventListener('scroll',onScroll,{passive:true});onScroll();

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
 gallery.addEventListener('pointerdown',e=>{down=true;startX=e.clientX;startLeft=gallery.scrollLeft;gallery.setPointerCapture(e.pointerId)});
 gallery.addEventListener('pointermove',e=>{if(down)gallery.scrollLeft=startLeft-(e.clientX-startX)});
 ['pointerup','pointercancel','pointerleave'].forEach(ev=>gallery.addEventListener(ev,()=>down=false));
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

const upload=document.querySelector('input[type=file]'),label=document.querySelector('[data-upload-label]');
if(upload&&label)upload.onchange=()=>label.textContent=upload.files.length?upload.files.length+' Bild(er) ausgewählt':'Noch keine Bilder ausgewählt';
document.querySelector('.contact-form')?.addEventListener('submit',e=>e.preventDefault());
})();
