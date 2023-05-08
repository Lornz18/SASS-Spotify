const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(" .header__nav");
const blurr = document.querySelector(".blur");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  blurr.classList.toggle("open");
});