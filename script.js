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
