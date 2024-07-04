"use strict";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const main = document.querySelector("main");
main.style.marginTop = `${headerHeight}px`;
const scrolledClass = "scrolled";

function addHeaderShadow() {
  if (window.scrollY >= 20) {
    if (!header.classList.contains(scrolledClass)) {
      header.classList.add(scrolledClass);
    }
  } else {
    if (header.classList.contains(scrolledClass)) {
      header.classList.remove(scrolledClass);
    }
  }
}

window.addEventListener("scroll", addHeaderShadow);

// window.addEventListener("hashchange", function () {
//   window.scrollTo(window.scrollX, window.scrollY - headerHeight);
// });
