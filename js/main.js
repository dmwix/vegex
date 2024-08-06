"use strict";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  eligen.style.minHeight = `${fullHeightMinusHeader}px`;
  // let fullHeightMinusHeader = 100 * vh - headerHeight;
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
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const fullscreenMenu = document.getElementById("fullscreen-menu");

function openNav() {
  fullscreenMenu.classList.remove("animate__fadeOut");
  fullscreenMenu.classList.add("animate__fadeIn");
  body.classList.add("fullscreen-menu-opened");
}

function closeNav() {
  fullscreenMenu.classList.add("animate__fadeOut");
  fullscreenMenu.classList.remove("animate__fadeIn");
  fullscreenMenu.addEventListener(
    "animationend",
    () => {
      if (fullscreenMenu.classList.contains("animate__fadeOut")) {
        body.classList.remove("fullscreen-menu-opened");
      }
    },
    { once: true }
  );
}

openMenu.addEventListener("click", openNav);
closeMenu.addEventListener("click", closeNav);

const fullscreenMenuLinks = fullscreenMenu.querySelectorAll("a");
fullscreenMenuLinks.forEach((a) => {
  a.addEventListener("click", closeNav);
});

const eligen = document.querySelector("#eligen");
const izqSticky = document.querySelector("#izq-sticky");

eligen.style.minHeight = `${fullHeightMinusHeader}px`;
izqSticky.style.top = `${headerHeight + 80}px`;

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

document.addEventListener("DOMContentLoaded", () => {
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const animateCounter = (counter) => {
    const value = +counter.getAttribute("akhi");
    const duration = 1000;
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

  // Setup Intersection Observer for counters
  const counters = document.querySelectorAll(".counter-value");

  const counterObserverOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.6, // Trigger when 60% of the element is visible
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Stop observing once the animation has started
      }
    });
  }, counterObserverOptions);

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });

  const beneficiosLista = document.querySelector("#beneficios-lista");
  const listItems = beneficiosLista.querySelectorAll("li");

  const listObserverOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.3, // Trigger when 100% of the element is visible
  };

  const listObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        listItems.forEach((item, index) => {
          item.classList.add("show", "animate__animated", "animate__fadeIn");
          item.style.animationDelay = `${index * 200}ms`;
        });
        listObserver.unobserve(beneficiosLista);
      }
    });
  }, listObserverOptions);

  listObserver.observe(beneficiosLista);
});
