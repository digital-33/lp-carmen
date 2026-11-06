const MESSAGE = 'Olá! Vim pelo site da Carmem Presentes e Cestas e gostaria de conhecer as opções de presentes e fazer um pedido. 😊';
const WHATSAPP = 'https://wa.me/5527992742647?text=' + encodeURIComponent(MESSAGE);

document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = WHATSAPP;
  a.target = '_blank';
  a.rel = 'noopener';
});

// Menu Mobile Drawer Logic
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
const menuBackdrop = document.getElementById('menu-backdrop');

function closeMobileMenu() {
  if (document.body.classList.contains('menu-open')) {
    document.body.classList.remove('menu-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    }
  }
}

function openMobileMenu() {
  document.body.classList.add('menu-open');
  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Fechar menu de navegação');
  }
}

if (menuToggle) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (document.body.classList.contains('menu-open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

if (menuBackdrop) {
  menuBackdrop.addEventListener('click', closeMobileMenu);
}

// Fechar ao clicar em qualquer link da navegação
if (mainNav) {
  mainNav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      closeMobileMenu();
    }
  });
}

// Fechar ao clicar fora do menu
document.addEventListener('click', (e) => {
  if (document.body.classList.contains('menu-open')) {
    if (!e.target.closest('#main-nav') && !e.target.closest('#menu-toggle')) {
      closeMobileMenu();
    }
  }
});

// Fechar ao pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
    closeMobileMenu();
    if (menuToggle) menuToggle.focus();
  }
});

// GTM & Meta Pixel Analytics
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
const g = document.createElement('script');
g.async = true;
g.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5XXQ57TM';
document.head.appendChild(g);

const fb = window.fbq = function () {
  fb.callMethod ? fb.callMethod.apply(fb, arguments) : fb.queue.push(arguments);
};
fb.queue = [];
fb.loaded = true;
fb.version = '2.0';
window._fbq = fb;
fb('init', '1000960519625580');
fb('track', 'PageView');
const s = document.createElement('script');
s.async = true;
s.src = 'https://connect.facebook.net/en_US/fbevents.js';
document.head.appendChild(s);

document.addEventListener('click', event => {
  const a = event.target.closest('[data-wa]');
  if (!a) return;
  window.dataLayer.push({
    event: 'whatsapp_click',
    cta_location: a.dataset.wa,
    cta_id: a.dataset.wa,
    contact_channel: "whatsapp",
    contact_intent: true
  });
  window.fbq('track', 'Lead', {
    content_name: 'WhatsApp',
    content_category: 'Intenção de contato'
  });
});
