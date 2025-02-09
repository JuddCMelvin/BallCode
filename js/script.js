// Video Player
const video = document.querySelector('.ballcode-video');
video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Gallery Slider
var swiper = new Swiper('.gallerySlider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// Reviews Slider
var swiper = new Swiper('.reviewsSlider', {
  freeMode: true,
  slidesPerView: 1.3,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    1140: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 2.8,
      spaceBetween: 30,
    },
  },
});

// FAQS
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const icon = question.querySelector('.faq-icon');

    // Close other open FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
        item.querySelector('.faq-icon').textContent = '+';
      }
    });

    // Toggle current FAQ item
    faqItem.classList.toggle('active');
    icon.textContent = faqItem.classList.contains('active') ? '-' : '+';
  });
});

//Mobile Menu
const hamburgerBtn = document.querySelector('.header-hamburger-btn');
const navbar = document.querySelector('.header-top-navbar');
const menuIcon = document.querySelector('.header-hamburger-btn img');

hamburgerBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');

  // Change hamburger to close icon when menu is open
  if (navbar.classList.contains('active')) {
    menuIcon.src = `./assets/svg/close.svg`;
  } else {
    menuIcon.src = `./assets/svg/menu.svg`;
  }
});
