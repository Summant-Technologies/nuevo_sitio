// import anime from "./animejs";;

// let animation = anime({
//     targets: '#rod',
//     rotate: [160, -160],
//     duration: 3000,
//     easing: 'easeInOutSine',
//     direction: 'alternate',
//     loop: true
//   });


// Este es el codigo para el slider de los clientes

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

/* Experiencia */
const items = document.querySelectorAll(".acordeon");

items.forEach(item => {
  item.addEventListener('click', () => {
    const desplegable = item.querySelector('.desplegable');

    desplegable.classList.toggle('hidden');
  })
})
/* Experiencia */

/* Navbar */
function toggleMenu() {
  let menuItems = document.getElementById("menuItems");
  let menuIconOpen = document.getElementById("menuIconOpen");
  let menuIconClose = document.getElementById("menuIconClose");
  
  menuItems.classList.toggle("hidden");
  menuIconOpen.classList.toggle("hidden");
  menuIconClose.classList.toggle("hidden");
}
/* Navbar */

// Glide.js

