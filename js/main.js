
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 6,//количество слайдов
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  
  thumbs: {
    swiper: swiper,
  },
});

const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar-panel");
const menuCloseBtn = document.querySelector('.close-btn')
menuBtn=addEventListener("click", ()=>{
  menu.classList.toggle('is-open');
});
menuCloseBtn.addEventListener('click', ()=>{
    menu.classList.toggle('is-open');
})