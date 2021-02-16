'use strict'

// Меню при скролле
window.onscroll = function() {
  let header = document.querySelector('header');
  let langChanger = document.querySelector('.languages');

  header.classList.toggle('scrollHeader', window.scrollY > 0);
  langChanger.classList.toggle('scrollLang', window.scrollY > 0);
};

// Переключатель языков

let langChanger = document.querySelector('.languages');

langChanger.onclick = function() {
  langChanger.classList.toggle('clickLang');
}

// Якоря

// Кнопка - скролл вниз
let btnScrollDown = document.querySelector('.block1__btn');
let scrollBlock = document.querySelector('.block2');

// Раздел меню и блок с этим разделом
let home = document.querySelector('.H');
let blockHome = document.querySelector('.block1');
let features = document.querySelector('.F');
let blockFeatures = document.querySelector('.block3');
let pages = document.querySelector('.P');
let blockPages = document.querySelector('.block4');
let tutorials = document.querySelector('.T');
let blockTutorials = document.querySelector('.block6');
let contact = document.querySelector('.C');
let blockContact = document.querySelector('.block7');

// Функция для перелистывания
function scrollTo(e) {
  window.scroll({
    left: 0,
    top: e.offsetTop - 88
  });
};

// Функция для кнопки - скролл вниз
btnScrollDown.onclick = function() {
  scrollTo(scrollBlock);
};

// Функции для каждого раздела меню
home.onclick = function() {
  scrollTo(blockHome);
};

features.onclick = function() {
  scrollTo(blockFeatures);
};

pages.onclick = function() {
  scrollTo(blockPages);
};

tutorials.onclick = function() {
  scrollTo(blockTutorials);
};

contact.onclick = function() {
  scrollTo(blockContact);
};