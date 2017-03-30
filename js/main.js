// Botão de abrir

var btnOpenMenu = document.querySelector('.btn-open-menu');
var btnCloseMenu = document.querySelector('.btn-close-menu');
var menuMobile = document.querySelector('.menu-mobile');

// Abrir menu mobile
btnOpenMenu.addEventListener('click', function() {
  menuMobile.classList.add('is-open');
});

// Fechar menu mobile

btnCloseMenu.addEventListener('click', function() {
  menuMobile.classList.remove('is-open');
});
