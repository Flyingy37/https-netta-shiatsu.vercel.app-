const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = [
    'היי נטע, אשמח לקבל פרטים ולתאם טיפול.',
    `שם: ${data.get('name')}`,
    `טלפון: ${data.get('phone')}`,
  ];
  if (data.get('email')) lines.push(`אימייל: ${data.get('email')}`);
  if (data.get('message')) lines.push(`הודעה: ${data.get('message')}`);
  window.open(`https://wa.me/972543257525?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
});
