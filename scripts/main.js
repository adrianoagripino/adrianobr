/* Progressive enhancement: the complete catalog also works without JavaScript. */
document.documentElement.classList.add('enhanced');
const filters = document.querySelector('.filters');
const cards = [...document.querySelectorAll('.product-card')];
filters.hidden = false;
filters.addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  const category = button.dataset.filter;
  for (const card of cards) card.hidden = category !== 'all' && card.dataset.category !== category;
  for (const item of filters.querySelectorAll('button')) {
    const selected = item === button;
    item.classList.toggle('selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  }
  document.querySelector('#catalog-count').textContent = cards.filter(card => !card.hidden).length + ' projetos';
});
const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('#site-nav');
function closeMenu() {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); toggle.focus(); }
});
document.querySelectorAll('[data-about]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#sobre').open = true;
}));
