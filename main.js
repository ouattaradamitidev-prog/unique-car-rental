const nav = document.querySelector("nav");
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

/* La barre de navigation est fixe : on la rend opaque dès le défilement. */
const auDefilement = () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
};

window.addEventListener("scroll", auDefilement);
auDefilement();

/* Formulaires : la confirmation réutilise le titre placé au-dessus du champ.
   Les champs requis sont validés par le navigateur. */
document.querySelectorAll(".footer__col form").forEach((form) => {
  const titre = form.parentElement.querySelector("h4");
  const titreInitial = titre ? titre.textContent : "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();

    if (!titre) return;
    titre.textContent =
      form.dataset.confirmation || "Merci ! Nous vous répondons rapidement.";

    setTimeout(() => {
      titre.textContent = titreInitial;
    }, 8000);
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2500,
});

/* Le carrousel de la flotte n'existe que sur certaines pages. */
const fleet1 = document.querySelector(".fleet__wrapper-1 .fleet__images");
const fleet2 = document.querySelector(".fleet__wrapper-2 .fleet__images");

[fleet1, fleet2].forEach((piste) => {
  if (!piste) return;

  Array.from(piste.children).forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    piste.appendChild(duplicateNode);
  });
});

ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".banner__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
