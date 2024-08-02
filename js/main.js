"use strict";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  // let fullHeightMinusHeader = 100 * vh - headerHeight;
  eligen.style.minHeight = `${fullHeightMinusHeader}px`;
});

const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const gap = 20;
const hero = document.querySelector("#hero");
let fullHeightMinusHeader = 100 * vh - headerHeight;
const scrolledClass = "scrolled";
hero.style.height = `${fullHeightMinusHeader - gap}px`;
main.style.marginTop = `${headerHeight}px`;

document.documentElement.style.scrollPaddingTop = `${headerHeight}px`;
// PARA MOBILE QUE SEA MÁS

// FULLSCREEN MENU

const fullscreenMenu = document.getElementById("fullscreen-menu");
function openNav() {
  fullscreenMenu.style.display = "flex";
  body.style.overflowY = "hidden";
  // HACER ESTO CON UNA CLASE EN CSS
}

const openMenu = document.getElementById("open-menu");
openMenu.addEventListener("click", openNav);

function closeNav() {
  document.getElementById("fullscreen-menu").style.display = "none";
  body.style.overflowY = "visible";
}

const closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click", closeNav);

const fullscreenMenuLinks = fullscreenMenu.querySelectorAll("a");
fullscreenMenuLinks.forEach((a) => {
  a.addEventListener("click", closeNav);
});

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

// const counters = document.querySelectorAll(".value");
// const duration = 900; // Total duration of the animation in milliseconds

// counters.forEach((counter) => {
//   const value = +counter.getAttribute("akhi");
//   let startTime = null;

//   const animate = (timestamp) => {
//     if (!startTime) startTime = timestamp;
//     const elapsed = timestamp - startTime;

//     const progress = Math.min(elapsed / duration, 1);
//     counter.innerText = Math.ceil(progress * value);

//     if (progress < 1) {
//       requestAnimationFrame(animate);
//     } else {
//       counter.innerText = value;
//     }
//   };

//   requestAnimationFrame(animate);
// });

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-value");
  const duration = 1000; // Total duration of the animation in milliseconds

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const animateCounter = (counter) => {
    const value = +counter.getAttribute("akhi");
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const progress = Math.min(elapsed / duration, 1);
      const formattedValue = formatNumber(Math.ceil(progress * value));
      counter.innerText = formattedValue;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        counter.innerText = formatNumber(value);
      }
    };

    requestAnimationFrame(animate);
  };

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.6, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Stop observing once the animation has started
      }
    });
  }, observerOptions);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

const eligen = document.querySelector("#eligen");
const izqFijo = document.querySelector("#izq-fijo");

eligen.style.minHeight = `${fullHeightMinusHeader}px`;
izqFijo.style.top = `${headerHeight + 80}px`;

// function halfSticky() {
//   if (window.scrollY >= diferentesPosition) {
//     izqFijo.style.position = "sticky";
//     izqFijo.style.top = `${diferentesPosition + headerHeight}px`;
//   }
// }

// window.addEventListener("scroll", halfSticky);

// window.addEventListener("scroll", function () {
//   let izqFijo = document.querySelector("#izq-fijo");
//   let rightColumn = document.querySelector("#derecha-scroll");
//   let rightColumnBottom = rightColumn.getBoundingClientRect().bottom;

//   if (rightColumnBottom <= headerHeight) {
//     izqFijo.style.position = "relative";
//   } else {
//     izqFijo.style.position = "sticky";
//     izqFijo.style.top = `${headerHeight + 20}px`;
//   }
// });
