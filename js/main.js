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