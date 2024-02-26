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
if (window.innerWidth < 1025) {
  const acordeones = document.querySelectorAll('.acordeon');
  acordeones.forEach(acordeon => {
    const bullet = acordeon.querySelector('.bullet');
    const desplegable = acordeon.querySelector('.desplegable');

    bullet.addEventListener('click', () => {
      const isVisible = !desplegable.classList.contains('hidden');
      acordeones.forEach(container => {
        container.querySelector('.desplegable').classList.add('hidden');
        container.querySelector('.bullet').style.display = 'flex';
      });
      bullet.style.display = isVisible ? 'flex' : 'none';
      desplegable.classList.toggle('hidden', isVisible);
    });

    desplegable.addEventListener('click', () => {
      desplegable.classList.add('hidden');
      bullet.style.display = 'flex';
    });
  });
} 
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

const glideResenas = new Glide("#glide-resenas", {
  type: 'carousel',
  perView: 3,
  gap: 40,
  focusAt: "center",
  width: 300,
  breakpoints: {
    768: {
      perView: 1
    },
  }
});

glideResenas.mount();

const glideTech = new Glide("#glide-tech", {
  type: 'carousel',
  perView: 4,
  autoplay: 3000,
  hoverpause: true,
  gap: 80,
  focusAt: 1,
  breakpoints: {
    1200: {
      perView: 3
    },
    768: {
      perView: 2
    },
  }
});

glideTech.mount();