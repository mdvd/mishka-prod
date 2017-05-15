var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var overlay = document.querySelector('.modal-overlay');
var buyModal = document.querySelector('.modal-buy');
var buyBtn = document.querySelectorAll('.btn--buy');
var buyClose = document.querySelector('.modal-buy__submit');

// Навигация

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click',
  function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

// Окно покупки
for(i = 0; i < buyBtn.length; i++) {
  buyBtn[i].addEventListener("click", function(event) {
  event.preventDefault();
  buyModal.classList.add("modal-buy--show");
  overlay.classList.add("modal-overlay--show");
  });
};

  buyClose.addEventListener("click", function(event) {
  event.preventDefault();
  buyModal.classList.remove("modal-buy--show");
  overlay.classList.remove("modal-overlay--show");
});

  overlay.addEventListener("click", function(event) {
  event.preventDefault();
  buyModal.classList.remove("modal-buy--show");
  overlay.classList.remove("modal-overlay--show");
});

  window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (buyModal.classList.contains("modal-buy--show")) {
      buyModal.classList.remove("modal-buy--show");
      overlay.classList.remove("modal-overlay--show");
    };
  };
});
