const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('.primary-nav');
if(menuButton&&navigation){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));navigation.classList.toggle('open',!open);menuButton.textContent=open?'Menu':'Close'});navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menu'}));}
document.querySelectorAll('[data-year]').forEach(node=>{node.textContent=new Date().getFullYear()});
