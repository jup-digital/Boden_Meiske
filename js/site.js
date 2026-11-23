// Boden Meiske – site.js v107 (Relaunch). Ohne Abhängigkeiten; ohne JavaScript bleibt alles sichtbar und bedienbar.
(function(){
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=matchMedia('(hover: hover) and (pointer: fine)').matches;
const once=(els,cb,opts)=>{const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){cb(e.target);o.unobserve(e.target)}}),opts);els.forEach(el=>o.observe(el))};

/* Header, Fortschritt, schwebende Knöpfe */
const header=$('#topbar'),nav=$('.nav'),toggle=$('.menu-toggle'),bar=$('.scroll-progress');
const backToTop=$('.back-to-top'),callFab=$('.call-fab'),footer=$('.footer'),hero=$('.hero');
const steps=$('.steps'),stepItems=steps?$$('article',steps):[];
let lastY=scrollY,ticking=false;
const onScroll=()=>{
 const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;
 header?.classList.toggle('scrolled',y>40);
 if(header&&!reduce)header.classList.toggle('is-hidden',y>lastY&&y>480&&!nav?.classList.contains('open'));
 bar?.style.setProperty('--p',String(max>0?y/max:0));
 const past=y>Math.max(520,innerHeight*.65);
 backToTop?.classList.toggle('visible',past);callFab?.classList.toggle('visible',past);
 // Hero steht (sticky), Inhalt legt sich darüber: Hero-Text blendet aus, Bild dunkelt ab; Bild-Parallaxe nur mit Maus
 if(hero&&!reduce&&y<innerHeight*1.2){hero.style.setProperty('--hero-p',Math.min(1,y/innerHeight).toFixed(3));if(finePointer)hero.style.setProperty('--hero-shift',(y*.16).toFixed(1)+'px')}
 // Ablauf: Fortschritt 0..1 über die Schrittreihe, erreichte Schritte aktiv
 if(steps){const r=steps.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.75-r.top)/(r.height+innerHeight*.25)));steps.style.setProperty('--steps-p',p.toFixed(3));stepItems.forEach((el,i)=>el.classList.toggle('is-on',p>=(i+.5)/stepItems.length))}
 lastY=y;ticking=false;
};
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
header?.addEventListener('focusin',()=>header.classList.remove('is-hidden'));
backToTop?.addEventListener('click',()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'}));
if(footer){new IntersectionObserver(([e])=>{backToTop?.classList.toggle('on-footer',e.isIntersecting);callFab?.classList.toggle('on-footer',e.isIntersecting)}).observe(footer)}
const submitBtn=$('.contact-form [type=submit]');
if(submitBtn)new IntersectionObserver(([e])=>[backToTop,callFab].forEach(b=>b?.classList.toggle('near-cta',e.isIntersecting))).observe(submitBtn);

/* Mobile Navigation */
const setMenu=open=>{nav.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen')};
if(toggle&&nav){
 toggle.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
 nav.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
 addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){setMenu(false);toggle.focus()}});
}

/* Aktueller Abschnitt in der Navigation */
const navLinks=$$('.nav a[href^="#"]:not(.nav-cta)');
const sections=navLinks.map(a=>$(a.getAttribute('href'))).filter(Boolean);
if(sections.length){const nio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;navLinks.forEach(a=>{const on=a.getAttribute('href')==='#'+e.target.id;a.classList.toggle('is-current',on);on?a.setAttribute('aria-current','location'):a.removeAttribute('aria-current')})}),{rootMargin:'-45% 0px -50% 0px'});sections.forEach(s=>nio.observe(s))}

/* Hero-Sequenz: Claim steigt zeilenweise auf, Rest blendet nach */
const claim=$('.hero-claim');
if(claim){[...claim.children].forEach((sp,i)=>{sp.innerHTML=`<span class="line-in" style="--i:${i}">${sp.innerHTML}</span>`;sp.classList.add('line')})}
if(hero){void hero.offsetWidth;hero.classList.add('is-in')}

/* Einblendungen mit kurzer Staffel innerhalb einer Gruppe */
const reveals=$$('.reveal');
reveals.forEach(el=>{const i=[...el.parentElement.children].filter(c=>c.classList.contains('reveal')).indexOf(el);if(i>0&&!reduce)el.style.transitionDelay=Math.min(i,3)*80+'ms'});
once(reveals,el=>el.classList.add('visible'),{threshold:.12});

/* Headlines: Wort für Wort aus der Maske, von unscharf zu scharf (Zeilen = <br> im Markup) */
const heads=$$('.section-head h2,.faq h2,.contact h2,.footer h2');
heads.forEach(h=>{let i=0;h.innerHTML=h.innerHTML.split(/<br\s*\/?>/i).map(l=>'<span class="line">'+l.trim().split(/\s+/).map(w=>'<span class="w"><span class="w-in" style="--i:'+(i++)+'">'+w+'</span></span>').join(' ')+'</span>').join(' ');h.classList.add('split')});
once(heads,h=>h.classList.add('is-in'),{threshold:.35});

/* Bilder öffnen sich leise */
const media=$$('.image-panel,.mat-media,.faq-image,.ref-open,.service-thumb');
media.forEach(m=>m.classList.add('clip'));
once(media,m=>m.classList.add('is-in'),{threshold:.15,rootMargin:'0px 0px -6% 0px'});

const facts=$('.facts');if(facts)once([facts],el=>el.classList.add('is-in'),{threshold:.3});

/* Intro-Zitat liest sich Wort für Wort ein */
const quote=$('.intro-statement'),qp=quote?.querySelector('p');
if(quote&&qp&&!reduce){
 quote.classList.add('intro-read');
 qp.innerHTML=qp.textContent.split(/(\s+)/).map(w=>/^\s+$/.test(w)||!w?w:`<span class="w">${w}</span>`).join('');
 const words=$$('.w',qp);let qt=false;
 const read=()=>{const r=quote.getBoundingClientRect(),start=innerHeight*.9,end=innerHeight*.58-r.height/2;const prog=Math.max(0,Math.min(1,(start-r.top)/Math.max(1,start-end)));const n=Math.round(prog*words.length);words.forEach((w,i)=>w.classList.toggle('is-read',i<n));qt=false};
 addEventListener('scroll',()=>{if(!qt){qt=true;requestAnimationFrame(read)}},{passive:true});addEventListener('resize',read);read();
}

/* Referenzen: mehr zeigen, Lightbox */
const refGrid=$('[data-refs]'),refMore=$('[data-refs-more]');
if(refGrid&&refMore)refMore.addEventListener('click',()=>{refGrid.classList.add('is-open');refMore.setAttribute('aria-expanded','true');$$('.ref .clip',refGrid).forEach(m=>m.classList.add('is-in'));$('.ref:nth-child(6) .ref-open',refGrid)?.focus({preventScroll:true})});
const lb=$('[data-lightbox]');
if(lb&&refGrid&&lb.showModal){
 const refs=$$('.ref',refGrid),img=$('[data-lb-img]',lb);let cur=0,opener=null;
 const show=i=>{cur=(i+refs.length)%refs.length;const r=refs[cur],src=$('img',r);img.src=src.currentSrc||src.src;img.alt=src.alt;$('[data-lb-title]',lb).textContent=$('figcaption b',r).textContent;$('[data-lb-detail]',lb).textContent=$('figcaption span',r).textContent;$('[data-lb-count]',lb).textContent=String(cur+1).padStart(2,'0')+' / '+refs.length};
 refGrid.addEventListener('click',e=>{const b=e.target.closest('.ref-open');if(!b)return;opener=b;show(+b.dataset.ref);lb.showModal()});
 $('[data-lb-prev]',lb).onclick=()=>show(cur-1);
 $('[data-lb-next]',lb).onclick=()=>show(cur+1);
 $('[data-lb-close]',lb).onclick=()=>lb.close();
 lb.addEventListener('click',e=>{if(e.target===lb)lb.close()});
 lb.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
 lb.addEventListener('close',()=>opener?.focus());
}

/* Material-Links füllen das Nachrichtenfeld vor */
$$('[data-topic]').forEach(a=>a.addEventListener('click',()=>{const t=$('.contact-form textarea');if(t&&!t.value.trim())t.value='Anfrage zu: '+a.dataset.topic+'\n'}));

/* Formular */
const form=$('.contact-form'),status=form&&$('.form-status',form);
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
 const btn=$('[type=submit]',form);btn.disabled=true;status.textContent='Wird gesendet …';
 try{
  const r=await fetch(endpoint,{method:'POST',body:d,headers:{Accept:'application/json'}});
  if(!r.ok)throw new Error(r.status);
  form.reset();
  status.textContent='Danke! Ihre Anfrage ist angekommen.';
 }catch(err){status.textContent='Das hat leider nicht geklappt. Bitte rufen Sie an: 0177 7091220.'}
 finally{btn.disabled=false}
});
})();
