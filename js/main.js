"use strict";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  let fullHeightMinusHeader = 100 * vh - headerHeight;
  hero.style.height = `${fullHeightMinusHeader}px`;
  eligen.style.height = `${fullHeightMinusHeader - 80}px`;
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

// const counters = document.querySelectorAll(".value");
// const speed = 250;

// counters.forEach((counter) => {
//   const animate = () => {
//     const value = +counter.getAttribute("akhi");
//     const data = +counter.innerText;

//     const time = value / speed;
//     if (data < value) {
//       counter.innerText = Math.ceil(data + time);
//       setTimeout(animate, 1);
//     } else {
//       counter.innerText = value;
//     }
//   };

//   animate();
// });

const counters = document.querySelectorAll(".value");
const duration = 900; // Total duration of the animation in milliseconds

counters.forEach((counter) => {
  const value = +counter.getAttribute("akhi");
  let startTime = null;

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;

    const progress = Math.min(elapsed / duration, 1);
    counter.innerText = Math.ceil(progress * value);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      counter.innerText = value;
    }
  };

  requestAnimationFrame(animate);
});

const hero = document.querySelector("#hero");
const eligen = document.querySelector("#eligen");
let fullHeightMinusHeader = 100 * vh - headerHeight;
hero.style.height = `${fullHeightMinusHeader}px`;
eligen.style.height = `${fullHeightMinusHeader - 80}px`;

const diferentes = document.querySelector("#diferentes");
const diferentesPosition = diferentes.offsetTop;
const izqFijo = document.querySelector("#izq-fijo");

// function halfSticky() {
//   if (window.scrollY >= diferentesPosition) {
//     izqFijo.style.position = "sticky";
//     izqFijo.style.top = `${diferentesPosition + headerHeight}px`;
//   }
// }

// window.addEventListener("scroll", halfSticky);
