window.addEventListener('DOMContentLoaded', function() {
  class MenuCard {
  constructor(src, alt, title, descr, price, parentSelector, ...classes) {
  this.src = src;
  this.alt = alt;
  this.title = title;
  this.descr = descr;
  this.price = price;
  this.classes = classes;
  this.parent = document.querySelector(parentSelector);
  this.transfer = 74;
  this.changeToRUS();
  }

   
  changeToRUS() {
  this.price = this.price * this.transfer;  
  }

   render() {
  const element = document.createElement('div');
  if (this.classes.length === 0) {
  this.classes = 'menu__item';
  element.classList.add(this.classes);
  } else {
  this.classes.forEach(className => element.classList.add(className));
  }

  element.innerHTML = `
  <img src=${this.src} alt=${this.alt}>
  <h3 class="menu__item-subtitle">${this.title}</h3>
  <div class="menu__item-descr">${this.descr}</div>
  <div class="menu__item-divider"></div>
  <div class="menu__item-price">
  <div class="menu__item-cost">Цена:</div>
  <div class="menu__item-total"><span>${this.price}</span> руб</div>
  </div>
  `;
  this.parent.append(element);
  }
  }
  new MenuCard(
  "./img/image-1.jpg",
  "camry",
  'Toyota Camry',
  'Toyota Camry - эталон комфорта и безопасности.',
  25300,
  ".menu .container",
  'menu__item'
  ).render();

  new MenuCard(
  "./img/image-2.jpg",
  "lendcruser",
  'Toyota Land Cruiser 200',
  'Легендарный внедорожник Toyota Land Cruiser 200.',
  80000,
  ".menu .container",
  'menu__item'
  ).render();

  new MenuCard(
  "./img/image-3.jpg",
  "rav4",
  'Toyota Rav 4',
  'Тойота РАВ 4- это пятиместный компактный кроссовер.',
  22800,
  ".menu .container",
  'menu__item'
  ).render();

  
});

