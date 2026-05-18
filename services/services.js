'use strict';

/* ---------- Common i18n (nav, footer, shared CTAs) ---------- */
const COMMON = {
  en: {
    'nav.home': 'Home', 'nav.about': 'About Us', 'nav.services': 'Services',
    'nav.skills': 'Skills', 'nav.experience': 'Experience', 'nav.contact': 'Contact',
    'nav.cta': "Let's talk",
    'nav.dd.web': 'Web Design & Dev', 'nav.dd.ai': 'AI & Automation',
    'nav.dd.mkt': 'Digital Marketing', 'nav.dd.seo': 'SEO & AIO',
    'nav.dd.gads': 'Google Ads', 'nav.dd.social': 'Social Media Marketing',
    'nav.dd.mgmt': 'Social Management', 'nav.dd.ecom': 'E-Commerce',
    'svc.back': '← All Services',
    'svc.cta.wa': 'Start a project on WhatsApp',
    'svc.cta.sub': 'Free consultation · Personal reply within 24 h',
    'svc.cta.email': 'Or send an email',
    'svc.stack.title': 'Tools & Tech Stack',
    'footer.tagline': 'Technology, automation and AI at the service of your brand.',
    'footer.contact.title': 'Contact',
    'footer.contact.wa': 'Direct WhatsApp',
    'footer.nav.title': 'Navigation',
    'footer.services.title': 'Services',
    'footer.services.1': 'Web Development', 'footer.services.2': 'Automation & AI',
    'footer.services.3': 'CRM & Marketing', 'footer.services.4': 'Branding & Design',
    'svc.faq.eyebrow': 'FAQ',
    'svc.faq.title': 'Common questions, <span class="ink">answered.</span>',
    'footer.built': 'Handcrafted · Miami, FL',
  },
  es: {
    'nav.home': 'Inicio', 'nav.about': 'Nosotros', 'nav.services': 'Servicios',
    'nav.skills': 'Habilidades', 'nav.experience': 'Experiencia', 'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',
    'nav.dd.web': 'Diseño Web & Dev', 'nav.dd.ai': 'IA & Automatización',
    'nav.dd.mkt': 'Marketing Digital', 'nav.dd.seo': 'SEO & AIO',
    'nav.dd.gads': 'Google Ads', 'nav.dd.social': 'Marketing en Redes',
    'nav.dd.mgmt': 'Gestión de Redes', 'nav.dd.ecom': 'E-Commerce',
    'svc.back': '← Todos los Servicios',
    'svc.cta.wa': 'Iniciar un proyecto por WhatsApp',
    'svc.cta.sub': 'Consulta gratuita · Respuesta personal en menos de 24 h',
    'svc.cta.email': 'O envía un correo',
    'svc.stack.title': 'Herramientas & Stack Tecnológico',
    'footer.tagline': 'Tecnología, automatización e IA al servicio de tu marca.',
    'footer.contact.title': 'Contacto',
    'footer.contact.wa': 'WhatsApp directo',
    'footer.nav.title': 'Navegación',
    'footer.services.title': 'Servicios',
    'footer.services.1': 'Desarrollo Web', 'footer.services.2': 'Automatización & IA',
    'footer.services.3': 'CRM & Marketing', 'footer.services.4': 'Branding & Diseño',
    'svc.faq.eyebrow': 'Preguntas Frecuentes',
    'svc.faq.title': 'Preguntas comunes, <span class="ink">respondidas.</span>',
    'footer.built': 'Hecho a mano · Miami, FL',
  }
};

/* Merge common + page-specific translations */
const PI = window.PAGE_I18N || {};
const i18n = {
  en: { ...COMMON.en, ...(PI.en || {}) },
  es: { ...COMMON.es, ...(PI.es || {}) }
};

/* ---------- Language helpers ---------- */
function detectLang() {
  const s = localStorage.getItem('nv_lang');
  if (s === 'en' || s === 'es') return s;
  return (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = i18n[lang]?.[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = i18n[lang]?.[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-wa]').forEach(el => {
    const msg = i18n[lang]?.[el.dataset.wa] || '';
    el.href = 'https://wa.me/17864920773' + (msg ? '?text=' + encodeURIComponent(msg) : '');
  });
  document.querySelectorAll('.langswitch__btn').forEach(btn =>
    btn.classList.toggle('is-active', btn.dataset.lang === lang)
  );
  // Update page title
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const v = i18n[lang]?.[titleEl.dataset.i18n];
    if (v) document.title = v;
  }
}

function setLang(lang) {
  localStorage.setItem('nv_lang', lang);
  applyTranslations(lang);
}

/* ---------- DOMContentLoaded ---------- */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(detectLang());

  document.querySelectorAll('.langswitch__btn').forEach(btn =>
    btn.addEventListener('click', () => setLang(btn.dataset.lang))
  );

  /* Nav scroll */
  const nav = document.getElementById('nav');
  if (nav) window.addEventListener('scroll', () =>
    nav.classList.toggle('is-scrolled', window.scrollY > 40), { passive: true }
  );

  /* Mobile burger */
  const burger = document.getElementById('burger');
  const mmenu = document.getElementById('mmenu');
  if (burger && mmenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-open');
      mmenu.classList.toggle('is-open');
      document.body.classList.toggle('mmenu-open');
    });
    mmenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('is-open');
      mmenu.classList.remove('is-open');
      document.body.classList.remove('mmenu-open');
    }));
  }

  /* Scroll reveal */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  document.querySelectorAll('.svc-feature').forEach((el, i) => {
    el.classList.add('reveal', i % 2 === 0 ? 'reveal--left' : 'reveal--right');
    el.style.transitionDelay = (i % 4) * 80 + 'ms';
    io.observe(el);
  });
  document.querySelectorAll('.svc-step').forEach((el, i) => {
    el.classList.add('reveal', 'reveal--left');
    el.style.transitionDelay = i * 80 + 'ms';
    io.observe(el);
  });
  document.querySelectorAll('.svc-stat').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = i * 100 + 'ms';
    io.observe(el);
  });

  /* Footer year */
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
});
