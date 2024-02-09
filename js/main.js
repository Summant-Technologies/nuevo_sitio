// import anime from "./animejs";;

// let animation = anime({
//     targets: '#rod',
//     rotate: [160, -160],
//     duration: 3000,
//     easing: 'easeInOutSine',
//     direction: 'alternate',
//     loop: true
//   });

// Este es el codigo para el slider de las resenas  
const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')
const itemWidth = 150
const padding = 10

prev.addEventListener('click', () => {
    list.scrollLeft -= (itemWidth + padding)
})
next.addEventListener('click', () => {
    list.scrollLeft += (itemWidth + padding)
})


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