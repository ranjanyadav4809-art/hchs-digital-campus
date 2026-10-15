const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
    document.querySelectorAll('.nav a').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

document.querySelectorAll('[data-target]').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
