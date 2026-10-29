/* Shared interactions: navigation, scrolling, service details and cross-page quote links. */
(() => {
  'use strict';

  const WHATSAPP_NUMBER = '265992524513';
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuIcon = menuToggle ? menuToggle.querySelector('i') : null;
  const navLinks = document.querySelector('.nav-links');
  const backToTop = document.querySelector('.back-to-top');
  const dialog = document.querySelector('#service-dialog');
  let lastDialogTrigger = null;

  const SERVICE_DETAILS = {
    residential: {
      title: 'Residential cleaning',
      serviceValue: 'Residential Cleaning',
      description: 'Cleaning for homes, apartments and living spaces, shaped around the areas you want refreshed and the level of care your property needs.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      alt: 'A welcoming and carefully furnished living room',
      items: ['Routine home cleaning', 'Detailed deep cleaning', 'Move-in and move-out cleaning', 'Carpet and sofa cleaning']
    },
    commercial: {
      title: 'Commercial cleaning',
      serviceValue: 'Commercial Cleaning',
      description: 'Cleaning for professional environments where a tidy, cared-for space matters to staff, customers and visitors.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
      alt: 'A bright contemporary office interior',
      items: ['Offices and workplaces', 'Hotels and Airbnbs', 'Shops and retail spaces', 'Floor cleaning and polishing', 'Waste removal and sanitization']
    },
    deep: {
      title: 'Deep cleaning',
      serviceValue: 'Deep Cleaning',
      description: 'A more detailed cleaning service for built-up dirt, grime and areas that need more than regular upkeep. The exact scope can be discussed before the service.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      alt: 'A fresh and bright interior',
      items: ['Detailed attention to surfaces', 'Targeted cleaning of neglected areas', 'Kitchen and bathroom focus by request', 'Scope tailored to your property']
    },
    postconstruction: {
      title: 'Post-construction cleaning',
      serviceValue: 'Post-Construction Cleaning',
      description: 'A cleanup after construction, renovation or building work, planned around the property and the kind of residue that needs attention.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      alt: 'Contemporary commercial buildings',
      items: ['Dust and debris removal', 'Floor and wall cleaning', 'Window cleaning', 'Fixture and surface polishing']
    },
    specialized: {
      title: 'Specialized cleaning',
      serviceValue: 'Specialized Cleaning',
      description: 'Targeted cleaning for specific surfaces or challenging areas. Share details about the material and the task so availability and the right approach can be discussed.',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=85',
      alt: 'Kitchen work surfaces in a modern home',
      items: ['Pressure washing', 'Tile and grout scrubbing', 'High-touch surface sanitization', 'Task-specific surface care']
    },
    upholstery: {
      title: 'Sofa, carpet & upholstery cleaning',
      serviceValue: 'Sofa Cleaning',
      description: 'Care for sofas, carpets, mattresses, office chairs and other upholstered items. Include the item type and condition in your request so the team can advise on the next step.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
      alt: 'Comfortable sofa in a contemporary living room',
      items: ['Sofa cleaning', 'Carpet cleaning', 'Mattress cleaning', 'Office chair cleaning', 'Upholstery cleaning']
    }
  };

  function reduceMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function closeMenu() {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    if (menuIcon) {
      menuIcon.className = 'fa-solid fa-bars';
      menuIcon.setAttribute('aria-hidden', 'true');
    }
    document.body.classList.remove('menu-open');
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(willOpen));
      menuToggle.setAttribute('aria-label', willOpen ? 'Close navigation menu' : 'Open navigation menu');
      if (menuIcon) {
        menuIcon.className = `fa-solid ${willOpen ? 'fa-xmark' : 'fa-bars'}`;
        menuIcon.setAttribute('aria-hidden', 'true');
      }
      navLinks.classList.toggle('is-open', willOpen);
      document.body.classList.toggle('menu-open', willOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  function updateScrollUI() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-scrolled', scrollTop > 12);
    if (backToTop) backToTop.classList.toggle('is-visible', scrollTop > 600);
  }
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
    });
  }

  const currentYear = document.querySelector('#current-year');
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  // Progressive reveal. Content remains visible when observers are unavailable or motion is reduced.
  if ('IntersectionObserver' in window && !reduceMotion()) {
    document.documentElement.classList.add('js-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  }

  function goToQuote(serviceValue) {
    closeMenu();
    const target = new URL('contact.html', window.location.href);
    if (serviceValue) target.searchParams.set('service', serviceValue);
    target.hash = 'quote';
    window.location.href = target.href;
  }

  document.querySelectorAll('[data-service-request]').forEach(button => {
    button.addEventListener('click', () => goToQuote(button.getAttribute('data-service-request')));
  });

  function openServiceDialog(key, trigger) {
    const detail = SERVICE_DETAILS[key];
    if (!detail) return;
    if (!dialog) {
      goToQuote(detail.serviceValue);
      return;
    }

    lastDialogTrigger = trigger || document.activeElement;
    const title = document.querySelector('#dialog-title');
    const description = document.querySelector('#dialog-description');
    const image = document.querySelector('#dialog-image');
    const list = document.querySelector('#dialog-list');
    const quoteButton = document.querySelector('#dialog-quote');
    const whatsappLink = document.querySelector('#dialog-whatsapp');
    if (!title || !description || !image || !list || !quoteButton || !whatsappLink) return;

    title.textContent = detail.title;
    description.textContent = detail.description;
    image.src = detail.image;
    image.alt = detail.alt;
    list.replaceChildren();

    detail.items.forEach(item => {
      const li = document.createElement('li');
      const icon = document.createElement('i');
      icon.className = 'fa-solid fa-check';
      icon.setAttribute('aria-hidden', 'true');
      const itemText = document.createElement('span');
      itemText.textContent = item;
      li.append(icon, itemText);
      list.appendChild(li);
    });

    quoteButton.onclick = () => {
      if (typeof dialog.close === 'function') dialog.close();
      goToQuote(detail.serviceValue);
    };
    const message = `Hello Tereza Cleaning Services, I would like to inquire about ${detail.title.toLowerCase()}. Please share more information and a quotation.`;
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    if (typeof dialog.showModal === 'function') dialog.showModal();
    else goToQuote(detail.serviceValue);
  }

  document.querySelectorAll('[data-service-info]').forEach(button => {
    button.addEventListener('click', () => openServiceDialog(button.getAttribute('data-service-info'), button));
  });

  if (dialog) {
    const closeButton = dialog.querySelector('.dialog-close');
    if (closeButton) closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (lastDialogTrigger && typeof lastDialogTrigger.focus === 'function') {
        lastDialogTrigger.focus({ preventScroll: true });
      }
    });
  }
})();
