const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const body = document.querySelector("body");
const moon = document.querySelector(".moon");
const moon2 = document.querySelector(".moon2");
const hLinks = document.querySelectorAll(".hLink");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
});

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});

moon2.addEventListener("click", () => {
  body.classList.toggle("dark");
});

console.log("test");
