const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.primary-nav');
if(menuButton&&navigation){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));navigation.classList.toggle('open',!open);menuButton.textContent=open?'Menu':'Close'});navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu'}));}
document.querySelectorAll('[data-year]').forEach(node=>{node.textContent=new Date().getFullYear()});

const featuredCarousel=document.querySelector('[data-featured-carousel]');
if(featuredCarousel){
  const slides=[...featuredCarousel.querySelectorAll('[data-featured-slide]')];
  const dots=[...featuredCarousel.querySelectorAll('[data-featured-dot]')];
  const previous=featuredCarousel.querySelector('[data-featured-prev]');
  const next=featuredCarousel.querySelector('[data-featured-next]');
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current=0;
  let timer;

  const showSlide=index=>{
    current=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>{
      const active=i===current;
      slide.hidden=!active;
      slide.classList.toggle('is-active',active);
    });
    dots.forEach((dot,i)=>{
      const active=i===current;
      dot.classList.toggle('is-active',active);
      dot.setAttribute('aria-selected',String(active));
    });
  };

  const stopAuto=()=>{if(timer){window.clearInterval(timer);timer=undefined;}};
  const startAuto=()=>{
    if(reduceMotion||slides.length<2)return;
    stopAuto();
    timer=window.setInterval(()=>showSlide(current+1),7000);
  };

  previous?.addEventListener('click',()=>{showSlide(current-1);startAuto();});
  next?.addEventListener('click',()=>{showSlide(current+1);startAuto();});
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>{showSlide(i);startAuto();}));
  featuredCarousel.addEventListener('mouseenter',stopAuto);
  featuredCarousel.addEventListener('mouseleave',startAuto);
  featuredCarousel.addEventListener('focusin',stopAuto);
  featuredCarousel.addEventListener('focusout',event=>{if(!featuredCarousel.contains(event.relatedTarget))startAuto();});
  showSlide(0);
  startAuto();
}
