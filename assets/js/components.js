/* Shared site components: update navigation, contact details, footer or shared dialog here. */
(() => {
  'use strict';

  const page = document.body.dataset.page || 'home';
  const whatsappMessage = 'Hello Tereza Cleaning Services, I would like to make an inquiry.';
  const whatsappUrl = `https://wa.me/265992524513?text=${encodeURIComponent(whatsappMessage)}`;

  const topline = document.querySelector('#site-topline');
  if (topline) {
    topline.innerHTML = `
      <div class="topline">
        <div class="container topline-inner">
          <div class="topline-message"><span>Clean space, clean mind.</span> Professional cleaning for the places that matter.</div>
          <div class="topline-contact">
            <a href="tel:+265992524513"><i class="fa-solid fa-phone" aria-hidden="true"></i> +265 992 524 513</a>
            <a href="mailto:terezacleaningmw@gmail.com"><i class="fa-solid fa-envelope" aria-hidden="true"></i> terezacleaningmw@gmail.com</a>
          </div>
        </div>
      </div>`;
  }

  const headerMount = document.querySelector('#site-header');
  if (headerMount) {
    headerMount.innerHTML = `
      <header class="site-header" id="top">
        <div class="container nav-inner">
          <a class="brand" href="index.html#home" aria-label="Tereza Cleaning Services home">
            <span class="brand-mark" aria-hidden="true"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i></span>
            <span class="brand-words"><strong>Tereza Cleaning Services</strong><small>Clean space, clean mind.</small></span>
          </a>
          <nav aria-label="Main navigation">
            <ul class="nav-links" id="nav-links">
              <li><a data-page-link="home" href="index.html">Home</a></li>
              <li><a data-page-link="services" href="services.html">Services</a></li>
              <li><a data-page-link="about" href="about.html">About us</a></li>
              <li><a data-page-link="locations" href="locations.html">Our locations</a></li>
              <li><a data-page-link="contact" href="contact.html#quote">Contact</a></li>
            </ul>
          </nav>
          <div class="nav-actions">
            <a class="nav-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="Chat with Tereza Cleaning Services on WhatsApp"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
            <a class="btn btn-primary" href="contact.html#quote">Get a free quote <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
            <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-controls="nav-links" aria-expanded="false"><i class="fa-solid fa-bars" aria-hidden="true"></i></button>
          </div>
        </div>
      </header>`;
  }

  document.querySelectorAll('[data-page-link]').forEach(link => {
    if (link.dataset.pageLink === page) link.setAttribute('aria-current', 'page');
  });

  const footerMount = document.querySelector('#site-footer');
  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-main">
          <div class="footer-brand">
            <a class="brand" href="index.html#home" aria-label="Tereza Cleaning Services home">
              <span class="brand-mark" aria-hidden="true"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i></span>
              <span class="brand-words"><strong>Tereza Cleaning Services</strong><small>Clean space, clean mind.</small></span>
            </a>
            <p>Professional cleaning for homes, businesses and specialist spaces in Blantyre and Lilongwe, Malawi.</p>
            <div class="footer-socials">
              <a href="https://www.facebook.com/search/top/?q=Tereza%20Cleaning%20Services" target="_blank" rel="noopener noreferrer" aria-label="Search Tereza Cleaning Services on Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
              <a href="https://www.tiktok.com/@terezacleaningservicesmw" target="_blank" rel="noopener noreferrer" aria-label="Tereza Cleaning Services on TikTok"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></a>
              <a href="https://wa.me/265992524513" target="_blank" rel="noopener noreferrer" aria-label="Tereza Cleaning Services on WhatsApp"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h3>Explore</h3>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="services.html">Our services</a></li>
              <li><a href="about.html">About us</a></li>
              <li><a href="locations.html">Our locations</a></li>
              <li><a href="contact.html#quote">Request a quote</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Our services</h3>
            <ul class="footer-links">
              <li><button class="footer-service-link" type="button" data-service-info="residential">Residential cleaning</button></li>
              <li><button class="footer-service-link" type="button" data-service-info="commercial">Commercial cleaning</button></li>
              <li><button class="footer-service-link" type="button" data-service-info="deep">Deep cleaning</button></li>
              <li><button class="footer-service-link" type="button" data-service-info="postconstruction">Post-construction</button></li>
              <li><button class="footer-service-link" type="button" data-service-info="upholstery">Sofa &amp; upholstery</button></li>
            </ul>
          </div>
          <div class="footer-col footer-contact-col">
            <h3>Get in touch</h3>
            <div class="footer-contact-list">
              <div class="footer-contact"><i class="fa-solid fa-phone" aria-hidden="true"></i><div><a href="tel:+265992524513">+265 992 524 513</a><br><a href="tel:+265880713118">+265 880 713 118</a></div></div>
              <div class="footer-contact"><i class="fa-solid fa-envelope" aria-hidden="true"></i><a href="mailto:terezacleaningmw@gmail.com">terezacleaningmw@gmail.com</a></div>
              <div class="footer-contact"><i class="fa-solid fa-location-dot" aria-hidden="true"></i><span>Blantyre &amp; Lilongwe, Malawi</span></div>
            </div>
          </div>
        </div>
        <div class="container footer-bottom"><p>© <span id="current-year">2026</span> Tereza Cleaning Services. All rights reserved.</p><p>Thoughtful cleaning for the spaces that matter.</p></div>
      </footer>`;
  }

  const controlsMount = document.querySelector('#shared-controls');
  if (controlsMount) {
    controlsMount.innerHTML = `
      <a class="floating-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="Contact Tereza Cleaning Services on WhatsApp"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
      <button class="back-to-top" type="button" aria-label="Back to top"><i class="fa-solid fa-chevron-up" aria-hidden="true"></i></button>
      <div class="toast-region" id="toast-region" aria-live="polite" aria-atomic="true"></div>
      <dialog class="service-dialog" id="service-dialog" aria-labelledby="dialog-title">
        <div class="dialog-top"><img id="dialog-image" src="" alt="" width="1000" height="500"><button class="dialog-close" type="button" aria-label="Close service details"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button></div>
        <div class="dialog-content"><p class="eyebrow">Service details</p><h2 id="dialog-title">Cleaning service</h2><p id="dialog-description"></p><h3>Service may include</h3><ul class="dialog-list" id="dialog-list"></ul><div class="dialog-actions"><button class="btn btn-primary" type="button" id="dialog-quote">Request this service <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button><a class="btn btn-outline" href="https://wa.me/265992524513" id="dialog-whatsapp" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Ask on WhatsApp</a></div></div>
      </dialog>`;
  }
})();
