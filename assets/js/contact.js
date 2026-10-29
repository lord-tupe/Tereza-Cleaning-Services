/* Contact-page quote form: validation and WhatsApp message preparation. */
(() => {
  'use strict';

  const form = document.querySelector('#quote-form');
  if (!form) return;

  const WHATSAPP_NUMBER = '265992524513';
  const serviceSelect = document.querySelector('#service');
  const dateInput = document.querySelector('#cleaning-date');
  const formMessage = document.querySelector('#form-message');
  const manualWhatsAppLink = document.querySelector('#manual-whatsapp-link');
  const submitButton = document.querySelector('#quote-submit');

  const fields = {
    fullName: document.querySelector('#full-name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    service: serviceSelect,
    location: document.querySelector('#location'),
    propertyType: document.querySelector('#property-type'),
    propertySize: document.querySelector('#property-size'),
    cleaningDate: dateInput,
    cleaningTime: document.querySelector('#cleaning-time'),
    details: document.querySelector('#details')
  };

  const errorIds = {
    fullName: 'error-full-name',
    phone: 'error-phone',
    email: 'error-email',
    service: 'error-service',
    location: 'error-location',
    propertyType: 'error-property-type',
    propertySize: 'error-property-size',
    cleaningDate: 'error-cleaning-date',
    cleaningTime: 'error-cleaning-time',
    details: 'error-details'
  };

  function localDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function reduceMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function setFieldError(key, message) {
    const field = fields[key];
    const error = document.getElementById(errorIds[key]);
    if (!field || !error) return;
    error.textContent = message;
    if (message) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
  }

  function normalizeMalawiPhone(value) {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('265')) digits = digits.slice(3);
    if (digits.startsWith('0')) digits = digits.slice(1);
    if (!/^[89]\d{8}$/.test(digits)) return null;
    return `265${digits}`;
  }

  if (dateInput) dateInput.min = localDateString(new Date());

  // A service selected from the Services page is passed in the URL query string.
  const requestedService = new URLSearchParams(window.location.search).get('service');
  if (requestedService && serviceSelect) {
    const match = Array.from(serviceSelect.options).find(option =>
      option.value.toLowerCase() === requestedService.toLowerCase() ||
      option.textContent.trim().toLowerCase() === requestedService.toLowerCase()
    );
    if (match) serviceSelect.value = match.value;
  }

  Object.entries(fields).forEach(([key, field]) => {
    if (!field) return;
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') setFieldError(key, '');
      if (formMessage) formMessage.classList.remove('is-visible');
    });
    field.addEventListener('change', () => {
      if (field.getAttribute('aria-invalid') === 'true') setFieldError(key, '');
      if (formMessage) formMessage.classList.remove('is-visible');
    });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (formMessage) formMessage.classList.remove('is-visible');
    Object.keys(fields).forEach(key => setFieldError(key, ''));
    let firstInvalid = null;

    const values = Object.fromEntries(
      Object.entries(fields).map(([key, field]) => [key, field ? field.value.trim() : ''])
    );

    const requireValue = (key, label) => {
      if (!values[key]) {
        setFieldError(key, `${label} is required.`);
        firstInvalid ||= fields[key];
      }
    };

    requireValue('fullName', 'Full name');
    if (!values.phone) {
      setFieldError('phone', 'Phone number is required.');
      firstInvalid ||= fields.phone;
    } else if (!normalizeMalawiPhone(values.phone)) {
      setFieldError('phone', 'Enter a valid Malawi mobile number, e.g. 0992 524 513 or +265 992 524 513.');
      firstInvalid ||= fields.phone;
    }
    requireValue('service', 'Preferred service');
    requireValue('location', 'Location');
    requireValue('propertyType', 'Property type');

    if (values.email && fields.email && !fields.email.validity.valid) {
      setFieldError('email', 'Enter a valid email address or leave this field blank.');
      firstInvalid ||= fields.email;
    }
    if (values.cleaningDate && values.cleaningDate < localDateString(new Date())) {
      setFieldError('cleaningDate', 'Choose today or a future date.');
      firstInvalid ||= fields.cleaningDate;
    }

    if (firstInvalid) {
      firstInvalid.focus();
      firstInvalid.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' });
      return;
    }

    const customerPhone = normalizeMalawiPhone(values.phone);
    const messageParts = [
      'Hello Tereza Cleaning Services, I would like to request a cleaning quote.',
      '',
      'CUSTOMER DETAILS',
      `Full name: ${values.fullName}`,
      `Phone: +${customerPhone}`,
      `Email: ${values.email || 'Not provided'}`,
      '',
      'CLEANING REQUEST',
      `Preferred service: ${values.service}`,
      `Location: ${values.location}`,
      `Property type: ${values.propertyType}`,
      `Property size: ${values.propertySize || 'Not provided'}`,
      `Preferred date: ${values.cleaningDate || 'Flexible / to be discussed'}`,
      `Preferred time: ${values.cleaningTime || 'No preference'}`,
      `Additional details: ${values.details || 'None provided'}`,
      '',
      'Please let me know the availability and quotation. Thank you.'
    ];

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageParts.join('\n'))}`;
    if (manualWhatsAppLink) manualWhatsAppLink.href = whatsappUrl;
    if (formMessage) {
      formMessage.classList.add('is-visible');
      formMessage.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'nearest' });
    }

    // The visitor still reviews and sends the prepared WhatsApp message themselves.
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (submitButton) submitButton.blur();
  });
})();
