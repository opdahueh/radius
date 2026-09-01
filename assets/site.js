
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.mobile-toggle'), nav=document.querySelector('.nav');
 if(toggle) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
 document.querySelectorAll('.nav-item.has-dropdown>a').forEach(a=>a.addEventListener('click',e=>{if(window.innerWidth<=800){e.preventDefault();a.parentElement.classList.toggle('open')}}));
 const slider=document.querySelector('[data-slider]');
 if(slider){const slides=[...slider.querySelectorAll('.slide')],dots=[...slider.querySelectorAll('.dot')];let i=0,timer;
  const show=n=>{i=(n+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle('active',k===i));dots.forEach((d,k)=>d.classList.toggle('active',k===i));};
  slider.querySelector('.slider-prev').onclick=()=>show(i-1); slider.querySelector('.slider-next').onclick=()=>show(i+1); dots.forEach((d,k)=>d.onclick=()=>show(k));
  const start=()=>timer=setInterval(()=>show(i+1),6000); const stop=()=>clearInterval(timer); slider.addEventListener('mouseenter',stop);slider.addEventListener('mouseleave',start);start();
 }
});
