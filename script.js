const nav = document.querySelector(".header-section nav");
const toggler = document.querySelector(".header-section .fa-bars");

toggler.addEventListener("click", ()=> {
  nav.classList.toggle("active");
})