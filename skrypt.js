const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});