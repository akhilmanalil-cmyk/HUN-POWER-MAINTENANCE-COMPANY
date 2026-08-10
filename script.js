<<<<<<< ours
<<<<<<< ours
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const productDropdown = document.querySelector(".has-dropdown");
const productToggle = document.querySelector(".dropdown-toggle");
const slides = Array.from(document.querySelectorAll(".hero-slide"));
let currentSlide = 0;
const dropdowns = Array.from(document.querySelectorAll(".has-dropdown"));

function closeDropdowns(exceptDropdown = null) {
  dropdowns.forEach((dropdown) => {
    if (dropdown !== exceptDropdown) {
      dropdown.classList.remove("is-open");
      dropdown.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
    }
  });
}

navToggle.addEventListener("click", () => {
navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  if (!isOpen) {
    closeDropdowns();
  }
});

productToggle.addEventListener("click", () => {
  const isOpen = productDropdown.classList.toggle("is-open");
  productToggle.setAttribute("aria-expanded", String(isOpen));
dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");

  toggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    closeDropdowns(dropdown);
  });
});

siteNav.addEventListener("click", (event) => {
siteNav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("is-open");
    productDropdown.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    productToggle.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-expanded", "false");
    closeDropdowns();
  }
});

document.addEventListener("click", (event) => {
  if (!productDropdown.contains(event.target)) {
    productDropdown.classList.remove("is-open");
    productToggle.setAttribute("aria-expanded", "false");
  if (!event.target.closest(".has-dropdown")) {
    closeDropdowns();
  }
});

setInterval(() => {
  slides[currentSlide].classList.remove("is-active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("is-active");
}, 5200);
=======
=======
>>>>>>> theirs
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');

toggle?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});
<<<<<<< ours
>>>>>>> theirs
=======
>>>>>>> theirs
