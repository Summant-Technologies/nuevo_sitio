// import anime from "./animejs";;

// let animation = anime({
//     targets: '#rod',
//     rotate: [160, -160],
//     duration: 3000,
//     easing: 'easeInOutSine',
//     direction: 'alternate',
//     loop: true
//   });

// Inicio codigo de las cards de la section porque

const cardVision = document.querySelector(".card--vision");
const cardMision = document.querySelector(".card--mision");
const cardValores = document.querySelector(".card--valores");

const btnVision = document.querySelector("#btn-vision");
const btnMision = document.querySelector("#btn-mision");
const btnValores = document.querySelector("#btn-valores");


function visionCard() {
    let imgBg = "images/EXPORTS/PORQUE/businesspeople-celebrating-victory 1.png";
    let icon = "images/ICONOS/PORQUE/BANDERIN.svg";
    let text = "Vision";

    const content = document.createElement("p");
    content.textContent = `Ser una empresa de IT valorada por nuestros clientes, construyendo
con ellos un vínculo de confianza basados en la calidad de nuestros productos y servicios y en las cualidades humanas y profesionales de nuestros colaboradores`

    changeCardContent(cardVision, imgBg, icon, text, content)
}

// Esta funcion crea el contenido de la card en porque summant cuando se hace click
function changeCardContent(card, imgBgUrl, iconUrl, text, content) {
    card.textContent = "";
    card.classList.add("card-mod");

    // Add the img for the bg
    const bgImg = document.createElement("img");
    bgImg.src = imgBgUrl;
    bgImg.classList.add("card-bg");

    card.appendChild(bgImg);

    // Create the div from the top
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("card__title");

    const titleImg = document.createElement("img");
    titleImg.src = iconUrl;
    titleImg.classList.add("card__title-img")

    const titleText = document.createElement("p");
    titleText.textContent = text;
    titleText.classList.add("card__title-text")

    titleDiv.appendChild(titleImg);
    titleDiv.appendChild(titleText);

    card.appendChild(titleDiv);

    // Create the separator of the card
    const separator = document.createElement("div");
    separator.classList.add("card-separator");

    card.appendChild(separator);

    //Create the content of the card

    content.classList.add("card-content");


    card.appendChild(content);
}

btnVision.addEventListener("click", visionCard);

// Fin cards section porque

// Inicio contador de porque summant

document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.scrollingCounter');

  var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };

  var observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
          if (entry.isIntersecting) {
              var targetValue = entry.target.dataset.target;
              animateCounter(entry.target, targetValue);
              observer.unobserve(entry.target);
          }
      });
  }, options);

  // Observe each target element
  elements.forEach(function (element) {
      observer.observe(element);
  });

  function animateCounter(element, targetValue) {
      var currentValue = 0;
      var duration = 2000;

      var startTime = null;

      function updateCounter(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = timestamp - startTime;

          var newValue = Math.min((progress / duration) * targetValue, targetValue);

          element.textContent = Math.round(newValue);

          if (progress < duration) {
              requestAnimationFrame(updateCounter);
          }
      }

      requestAnimationFrame(updateCounter);
  }
});


// Fin contador de porque summant

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