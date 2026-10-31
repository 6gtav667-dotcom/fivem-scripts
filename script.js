const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.textContent = isOpen ? '✕' : '☰';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#copy-contact').addEventListener('click', async () => {
  const message = 'Pozdrav! Zanima me FiveM skripta / izrada po narudžbi. Moj framework je: ____. Trebam: ____. Molim ponudu.';
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText(message); status.textContent = 'Predložak upita je kopiran!'; }
  catch { status.textContent = 'Kopiranje nije uspjelo. Pošalji upit na 6gtav667@gmail.com.'; }
});
