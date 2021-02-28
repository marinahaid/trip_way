'use strict'

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var formMain = document.querySelector('.form__appointment');
var requireEls = document.querySelectorAll('.require');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});




 var slider = document.querySelectorAll(".more__link");
  if (slider) {
    slider.forEach(function (item, i) {
      item.addEventListener("click", function (evt) {
        evt.preventDefault();
        var active_slider = document.querySelector(".more__item--active");
        active_slider.classList.remove("more__item--active");
        var new_active_slider = this.dataset.slide;
        document.querySelector("." + new_active_slider).classList.add("more__item--active");
        var active = document.querySelector(".more__link--active");
        active.classList.remove("more__link--active");
        this.classList.add("more__link--active");
      });
    });
  }

   /* var slider_cyrcle_active = document.querySelector(".more__link--active");
    slider_cyrcle_active.classList.remove("more__link--active");
    document.querySelector(".more__link--active" + number).classList.add(".more__link--active");*/
  







var link = document.querySelector(".more__button");
var popup = document.querySelector(".form-popup");
var close = popup.querySelector(".close-popup");



link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});


