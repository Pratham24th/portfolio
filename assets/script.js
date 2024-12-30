const swiper = new Swiper('.swiper-container', {
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  on: {
    init: function () {
      const prevButton = document.querySelector('.swiper-button-prev');
      const nextButton = document.querySelector('.swiper-button-next');

      prevButton.style.background = '#333'; /* Change the background color */
      nextButton.style.background = '#333'; /* Change the background color */

      prevButton.style.color = '#fff'; /* Change the arrow color */
      nextButton.style.color = '#fff'; /* Change the arrow color */
    },
  },
});