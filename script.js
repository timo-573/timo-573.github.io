const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.primary-nav');
if(menuButton&&navigation){
  menuButton.addEventListener('click',()=>{
    const open=menuButton.getAttribute('aria-expanded')==='true';
    menuButton.setAttribute('aria-expanded',String(!open));
    navigation.classList.toggle('open',!open);
    menuButton.textContent=open?'Menu':'Close';
  });
  navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
    menuButton.textContent='Menu';
  }));
}

document.querySelectorAll('[data-year]').forEach(node=>{
  node.textContent=new Date().getFullYear();
});

const featuredCarousel=document.querySelector('[data-featured-carousel]');
if(featuredCarousel){
  const slides=Array.from(featuredCarousel.querySelectorAll('[data-featured-slide]'));
  const dots=Array.from(featuredCarousel.querySelectorAll('[data-featured-dot]'));
  const previous=featuredCarousel.querySelector('[data-featured-prev]');
  const next=featuredCarousel.querySelector('[data-featured-next]');
  const reduceMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current=0;
  let timer=null;
  let touchStartX=null;

  function showSlide(index){
    if(!slides.length)return;
    current=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>{
      const active=i===current;
      slide.hidden=!active;
      slide.setAttribute('aria-hidden',String(!active));
      slide.classList.toggle('is-active',active);
    });
    dots.forEach((dot,i)=>{
      const active=i===current;
      dot.classList.toggle('is-active',active);
      dot.setAttribute('aria-selected',String(active));
    });
  }

  function stopAuto(){
    if(timer!==null){
      window.clearInterval(timer);
      timer=null;
    }
  }

  function startAuto(){
    if(reduceMotion||slides.length<2)return;
    stopAuto();
    timer=window.setInterval(()=>showSlide(current+1),7000);
  }

  function previousSlide(){
    showSlide(current-1);
    startAuto();
  }

  function nextSlide(){
    showSlide(current+1);
    startAuto();
  }

  if(previous)previous.addEventListener('click',previousSlide);
  if(next)next.addEventListener('click',nextSlide);
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>{
    showSlide(i);
    startAuto();
  }));

  featuredCarousel.addEventListener('mouseenter',stopAuto);
  featuredCarousel.addEventListener('mouseleave',startAuto);
  featuredCarousel.addEventListener('focusin',stopAuto);
  featuredCarousel.addEventListener('focusout',event=>{
    if(!featuredCarousel.contains(event.relatedTarget))startAuto();
  });

  featuredCarousel.addEventListener('touchstart',event=>{
    if(event.touches&&event.touches.length===1)touchStartX=event.touches[0].clientX;
  },{passive:true});

  featuredCarousel.addEventListener('touchend',event=>{
    if(touchStartX===null||!event.changedTouches||!event.changedTouches.length)return;
    const deltaX=event.changedTouches[0].clientX-touchStartX;
    touchStartX=null;
    if(Math.abs(deltaX)<45)return;
    if(deltaX<0)nextSlide();
    else previousSlide();
  },{passive:true});

  showSlide(0);
  startAuto();
}
