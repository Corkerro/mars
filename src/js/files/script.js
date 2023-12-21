// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('heroVideo');
  video.play();
});

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2,
    effects: true,
  });
}

// Создайте глобальный Timeline
const globalTimeline = gsap.timeline();

// Задайте стили по умолчанию для #heroVideo
gsap.set('#heroVideo', {
  opacity: 0,
});

globalTimeline.fromTo(
  '#heroVideo',
  {
    opacity: 0,
  },
  {
    opacity: 1,
  },
  0.1,
);

// Задайте стили по умолчанию для .hero__right_soldier
gsap.set('.hero__right_soldier', {
  opacity: 0,
  x: 50,
  y: 50,
  rotation: -35,
});

globalTimeline.fromTo(
  '.hero__right_soldier',
  {
    opacity: 0,
    x: 50,
    y: 50,
    rotation: -35,
  },
  {
    opacity: 1,
    x: 0,
    y: 0,
    rotation: -35,
  },
  1,
);

// Задайте стили по умолчанию для .hero__right_starship
gsap.set('.hero__right_starship', {
  opacity: 0,
  x: 100,
  y: -24,
});

globalTimeline.fromTo(
  '.hero__right_starship',
  {
    opacity: 0,
    x: 100,
    y: -24,
  },
  {
    opacity: 1,
    x: 0,
    y: 0,
  },
  1.1,
);

gsap.fromTo(
  '.hero__container',
  {
    opacity: 1,
  },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero__container',
      start: '100',
      end: '700',
      scrub: true,
    },
  },
);

gsap.fromTo(
  '#why_h1',
  {
    y: 150,
    opacity: 0,
  },
  {
    y: 0,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.why',
      scrub: true,
      start: '-1000',
      end: '-300',
    },
  },
);

gsap.fromTo(
  '#why_p',
  {
    y: 150,
    opacity: 0,
  },
  {
    y: 0,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.why',
      scrub: true,
      start: '-1000',
      end: '-300',
    },
  },
);

gsap.fromTo(
  '.why__card',
  {
    y: 150,
    opacity: 0,
  },
  {
    y: 0,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.why__content',
      scrub: true,
      start: '-1000',
      end: '-600',
    },
  },
);

gsap.fromTo(
  '.why__button',
  {
    y: 150,
    opacity: 0,
  },
  {
    y: 0,
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.why__button',
      scrub: true,
      start: '-1200',
      end: '-800',
    },
  },
);

// Запустите глобальный Timeline с задержкой после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    globalTimeline.play();
  }, 100); // Задержка не раньше 300 мс после загрузки
});
