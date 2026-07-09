// 1. Fixed header — solid after scroll
const header = document.getElementById('header');
if (header) {
  const onScroll = () => header.classList.toggle('solid', window.scrollY > 60);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// 2. Conditions carousel
const assetUrl = (path) => new URL(path, import.meta.url).href;

const conditions = [
  { title: 'Back Pain', path: assetUrl('../assets/optimize/clinic_front.webp'), desc: "Whether it's a recent strain or pain that's lingered for years, our physician evaluates the root cause before recommending a path forward." },
  { title: 'Neck Pain', path: assetUrl('../assets/optimize/customer_selfie.webp'), desc: "From stiffness to radiating discomfort, we assess your neck pain with a full, physician-led clinical evaluation." },
  { title: 'Joint Pain', path: assetUrl('../assets/optimize/physician_portrait.webp'), desc: "Knees, shoulders, hips — we evaluate joint pain to build a plan that fits your body and your goals." },
  { title: 'Sciatica', path: assetUrl('../assets/optimize/Sciatica.webp'), desc: "Nerve-related pain deserves a careful evaluation. We start by understanding your symptoms and medical history." },
  { title: 'Chronic Pain', path: assetUrl('../assets/optimize/chronic_pain.webp'), desc: "Ongoing pain that's affected your daily life? Let's start with a thorough evaluation and a plan built around you." },
  { title: 'Sports Injuries', path: assetUrl('../assets/optimize/sciatica_pain.webp'), desc: "A thorough medical evaluation helps shape a plan aligned with your injury, needs, and activity goals." },
];

// Customer-provided Google reviews. Google UI metadata and owner responses are intentionally excluded.
const testimonials = [
  {
    name: 'Christian Roldan',
    rating: 5,
    text: 'Amazing experience and the staff was very welcoming, professional, and genuinely caring. Highly recommended!',
  },
  {
    name: 'RN, BSN',
    rating: 5,
    text: "I've seen a lot of specialists over the years, and Renew Pain & Wellness has easily been one of the best experiences I've had. Appointments are organized, the office is professional, and I never feel rushed.",
  },
  {
    name: 'Yoella',
    rating: 5,
    text: 'Finding a doctor who truly listens is becoming harder and harder these days. The physician spent more time with me during one visit than most doctors have in years.',
  },
  {
    name: 'Sophia Gonzalez',
    rating: 5,
    text: "I've had an excellent experience at Renew Pain & Wellness. Dr. Sina is one of the few physicians I've met who truly takes the time to listen and understand what you're going through before recommending treatment. I never felt rushed.",
  },
  {
    name: "Eli's Mom",
    rating: 5,
    text: "I recently completed ketamine IV therapy at Renew, and I couldn't have asked for a better experience. I was nervous going into my first treatment, but the medical staff made me feel comfortable from the moment I arrived.",
  },
  {
    name: 'Davie Shatil',
    rating: 5,
    text: 'I almost never write reviews, but this place deserves one. After trying multiple doctors over the years, Renew has been the first office that truly listened.',
  },
  {
    name: 'S D',
    rating: 5,
    text: "I honestly can't say enough good things about Renew Pain & Wellness Center of South Florida. After struggling to find a practice that actually listens and treats you like a person instead of just another appointment, I finally found Renew.",
  },
  {
    name: 'Steven Foley',
    rating: 5,
    text: 'Longevity Care Worth Doing for Your Family. Renew Pain & Wellness Center delivered outstanding longevity and wellness care.',
  },
  {
    name: 'Arielle Zeligman',
    rating: 5,
    text: "I had a great experience at Renew Pain & Wellness. Everyone was friendly, professional, and made me feel comfortable from the moment I walked in. They really took the time to listen to my concerns and explain my treatment options.",
  },
  {
    name: 'Sophia Gonzalez',
    rating: 5,
    text: 'Amazing staff, excellent service, and a beautiful facility. Highly recommend!',
  },
  {
    name: 'Simon Johnson',
    rating: 5,
    text: 'Excellent experience from start to finish! The staff was incredibly friendly, the office was beautiful and professional, and I truly felt heard throughout the entire process.',
  },
  {
    name: 'Aroon Duncanson',
    rating: 5,
    text: 'Love all the providers here! Such a great place with amazing options, highly recommend & everyone makes you feel so comfortable and thoroughly explains everything.',
  },
  {
    name: 'Michal Goldshmid',
    rating: 5,
    text: 'These providers have magic hands and big hearts! Highly recommend!',
  },
  {
    name: 'Holly Springer',
    rating: 5,
    text: 'I recently visited Renew Pain and Wellness Center of South Florida and had a great experience. The staff was welcoming, the office was clean and professional, and the provider took the time to listen to my concerns and explain my treatment.',
  },
  {
    name: 'David Winter',
    rating: 5,
    text: 'I highly recommend Renew Pain and Wellness Center of South Florida, especially Dr. Shatil. From my first visit, the team took the time to understand not only the pain I was experiencing from a sports injury, but also my personal goals.',
  },
  {
    name: 'Daliana Martinez',
    rating: 5,
    text: 'I had a great experience at Renew. The staff was incredibly friendly and welcoming from the moment I arrived. They were very informative and took the time to answer all of my questions, which made me feel comfortable and well cared for.',
  },
  {
    name: 'Rivka Stell',
    rating: 5,
    text: '5-star review.',
  },
  {
    name: 'Lee Shatil',
    rating: 5,
    text: 'Excellent experience from start to finish. The staff was friendly, the office was beautiful and professional, and I felt truly listened to. Highly recommend Renew Pain and Wellness Center for anyone dealing with chronic pain or looking for personalized care.',
  },
  {
    name: 'Pedro Lanz',
    rating: 5,
    text: '5-star review.',
  },
];

const carTitle = document.getElementById('carTitle');
const carDesc = document.getElementById('carDesc');
const carCounter = document.getElementById('carCounter');
const carImage = document.getElementById('carImage');
const carThumbs = document.getElementById('carThumbs');
let carIndex = 0;

if (carThumbs && carTitle) {
  // build thumbnails
  conditions.forEach((c, i) => {
    const t = document.createElement('div');
    t.className = 'imgwrap' + (i === 0 ? ' active' : '');
    t.setAttribute('role', 'tab');
    t.setAttribute('aria-label', c.title);
    t.setAttribute('aria-selected', String(i === 0));
    t.setAttribute('tabindex', '0');
    t.innerHTML = '<img src="' + c.path + '" alt="' + c.title + '" loading="lazy" decoding="async">';
    t.addEventListener('click', () => setCondition(i));
    t.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setCondition(i);
      }
    });
    carThumbs.appendChild(t);
  });

  function setCondition(i) {
    carIndex = (i + conditions.length) % conditions.length;
    const c = conditions[carIndex];
    carTitle.textContent = c.title;
    carDesc.textContent = c.desc;
    carCounter.textContent = String(carIndex + 1).padStart(2, '0') + ' / ' + String(conditions.length).padStart(2, '0');
    // Update the image src and alt text
    const imgTag = carImage.querySelector('img');
    if (imgTag) {
      imgTag.src = c.path;
      imgTag.setAttribute('alt', c.title + ' evaluation at RENEW');
    }
    [...carThumbs.children].forEach((el, idx) => {
      const isActive = idx === carIndex;
      el.classList.toggle('active', isActive);
      el.setAttribute('aria-selected', String(isActive));
    });
  }
  
  const prevBtn = document.getElementById('carPrev');
  const nextBtn = document.getElementById('carNext');
  if (prevBtn) prevBtn.addEventListener('click', () => setCondition(carIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => setCondition(carIndex + 1));
}

// 3. FAQ accordion
const closeFaqItem = (item) => {
  const btn = item.querySelector('.faq-q');
  const ans = item.querySelector('.faq-a');
  item.classList.remove('open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
  if (ans) ans.style.maxHeight = '0';
};

const faqTabs = document.querySelectorAll('[data-faq-tab]');
const faqPanels = document.querySelectorAll('[data-faq-panel]');

faqTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.faqTab;

    faqTabs.forEach(item => {
      const isActive = item === tab;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    faqPanels.forEach(panel => {
      const isActive = panel.dataset.faqPanel === target;
      panel.hidden = !isActive;
      panel.classList.toggle('active', isActive);
      panel.querySelectorAll('.faq-item.open').forEach(closeFaqItem);
    });
  });
});

document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  const ans = item.querySelector('.faq-a');
  if (btn && ans) {
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0';
    });
  }
});

// 4. Testimonial carousel
const initTestimonialCarousel = () => {
  const root = document.getElementById('testimonialCarousel');
  if (!root || !testimonials.length) return;

  const elements = {
    body: root.querySelector('.testi-body'),
    text: document.getElementById('testimonialText'),
    name: document.getElementById('testimonialName'),
    rating: document.getElementById('testimonialRating'),
    stars: document.querySelector('#testimonialRating span'),
    counter: document.getElementById('testimonialCounter'),
    more: document.getElementById('testimonialMore'),
    controls: document.getElementById('testimonialControls'),
    prev: document.getElementById('testimonialPrev'),
    next: document.getElementById('testimonialNext'),
  };

  if (Object.values(elements).some((element) => !element)) return;

  let index = 0;
  let expanded = false;
  let touchStartX = 0;
  let animationTimer = 0;

  const getPreviewLimit = () => {
    if (window.matchMedia('(max-width: 520px)').matches) return 170;
    if (window.matchMedia('(max-width: 900px)').matches) return 230;
    return 300;
  };

  const createPreview = (text) => {
    const limit = getPreviewLimit();
    if (text.length <= limit) return text;
    const candidate = text.slice(0, limit + 1);
    const lastSpace = candidate.lastIndexOf(' ');
    return `${candidate.slice(0, lastSpace > 0 ? lastSpace : limit).trimEnd()}\u2026`;
  };

  const setTextIfChanged = (node, value) => {
    if (node.textContent !== value) {
      node.textContent = value;
    }
  };

  const setSingleReviewState = () => {
    root.classList.toggle('is-single', testimonials.length === 1);
    root.tabIndex = 0;
    elements.controls.hidden = false;
    elements.prev.disabled = false;
    elements.next.disabled = false;
  };

  const update = ({ animate = true } = {}) => {
    const testimonial = testimonials[index];
    const preview = createPreview(testimonial.text);
    const isLong = preview !== testimonial.text;
    const visibleText = expanded && isLong ? testimonial.text : preview;

    const render = () => {
      setTextIfChanged(elements.text, visibleText);
      setTextIfChanged(elements.name, testimonial.name);
      setTextIfChanged(elements.stars, '\u2605'.repeat(testimonial.rating));
      setTextIfChanged(elements.counter, `${index + 1} of ${testimonials.length}`);
      elements.rating.setAttribute('aria-label', `${testimonial.rating} out of 5 stars`);
      elements.more.hidden = !isLong;
      elements.more.textContent = expanded ? 'Show less' : 'Read more';
      elements.more.setAttribute('aria-expanded', String(expanded));
    };

    window.clearTimeout(animationTimer);
    if (!animate) {
      elements.body.classList.remove('is-updating');
      render();
      return;
    }

    elements.body.classList.add('is-updating');
    animationTimer = window.setTimeout(() => {
      render();
      window.requestAnimationFrame(() => elements.body.classList.remove('is-updating'));
    }, 140);
  };

  const move = (direction) => {
    index = (index + direction + testimonials.length) % testimonials.length;
    expanded = false;
    update();
  };

  elements.prev.addEventListener('click', () => move(-1));
  elements.next.addEventListener('click', () => move(1));
  elements.more.addEventListener('click', () => {
    expanded = !expanded;
    update();
  });
  root.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      move(-1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      move(1);
    }
  });
  root.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse') return;
    touchStartX = event.clientX;
  }, { passive: true });
  root.addEventListener('pointerup', (event) => {
    if (event.pointerType === 'mouse' || !touchStartX) return;
    const distance = event.clientX - touchStartX;
    touchStartX = 0;
    if (Math.abs(distance) > 44) move(distance < 0 ? 1 : -1);
  }, { passive: true });
  window.addEventListener('resize', () => {
    if (!expanded) update({ animate: false });
  }, { passive: true });

  setSingleReviewState();
  update({ animate: false });
};

initTestimonialCarousel();

// 5. Callback form with validation and confirmed-success redirect
const form = document.getElementById('callbackForm');
if (form) {
  const nameInput = document.getElementById('cbName');
  const phoneInput = document.getElementById('cbPhone');
  const submitButton = form.querySelector('button[type="submit"]');
  const formStatus = document.getElementById('formStatus');
  let isSubmitting = false;

  const setFieldError = (field, hasError) => {
    field.classList.toggle('error', hasError);
    field.setAttribute('aria-invalid', String(hasError));
  };

  const clearStatus = () => {
    formStatus.hidden = true;
    formStatus.textContent = '';
  };

  [nameInput, phoneInput].forEach((field) => {
    field.addEventListener('input', () => {
      setFieldError(field, false);
      clearStatus();
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    let ok = true;
    clearStatus();
    [nameInput, phoneInput].forEach((field) => setFieldError(field, false));

    if (!nameInput.value.trim()) {
      setFieldError(nameInput, true);
      ok = false;
    }

    const phoneValue = phoneInput.value.trim();
    const phoneRegex = /^[\d\s\-+().]+$/;
    const phoneDigits = phoneValue.replace(/\D/g, '');
    if (!phoneValue || !phoneRegex.test(phoneValue) || phoneDigits.length < 10) {
      setFieldError(phoneInput, true);
      ok = false;
    }

    if (!ok) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    const endpoint = form.dataset.endpoint || import.meta.env.VITE_CALLBACK_FORM_ENDPOINT;
    if (!endpoint) {
      formStatus.innerHTML = 'Callback requests are temporarily unavailable. Please call <a href="tel:+19542569422">(954) 256-9422</a>.';
      formStatus.hidden = false;
      return;
    }

    isSubmitting = true;
    form.setAttribute('aria-busy', 'true');
    submitButton.disabled = true;
    submitButton.textContent = submitButton.dataset.loadingLabel;
    let submissionAccepted = false;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      submissionAccepted = true;
      window.location.assign('thank-you/');
    } catch {
      formStatus.innerHTML = 'We could not send your request. Please try again or call <a href="tel:+19542569422">(954) 256-9422</a>.';
      formStatus.hidden = false;
    } finally {
      if (!submissionAccepted) {
        isSubmitting = false;
        form.removeAttribute('aria-busy');
        submitButton.disabled = false;
        submitButton.textContent = submitButton.dataset.idleLabel;
      }
    }
  });
}

// 6. Scroll reveal (respects reduced-motion via CSS)
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
