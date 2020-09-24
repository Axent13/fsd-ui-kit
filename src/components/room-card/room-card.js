import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const dataFromSomewhere = [
  {
    roomName: '888',
    isLuxury: true,
    dailyPrice: 9990,
  },
  {
    roomName: '840',
    isLuxury: false,
    dailyPrice: 9990,
  },
];

$(document).ready(() => {
  class RoomCard {
    constructor($rootElement, data = {}) {
      this.$rootElement = $rootElement;
      this.$carouselElement = this.$rootElement.find('.js-room-card__carousel');
      console.log(this.$carouselElement.data('arrows'));
      this.hasArrows = this.$carouselElement.data('arrows') === 'on';
      console.log(this.hasArrows);
      this.$roomName = this.$rootElement.find('.js-room-card__room-number');
      this.$luxe = this.$rootElement.find('.js-room-card__luxe');
      this.$dailyPrice = this.$rootElement.find('.js-room-card__daily-price-currency');


      this.$carouselElement.owlCarousel({
        items: 1,
        nav: this.hasArrows,
        dots: true,
      });

      if (this.hasArrows) {
        this.$arrowPrev = this.$carouselElement.find('.owl-prev');
        this.$arrowNext = this.$carouselElement.find('.owl-next');

        this.$arrowPrev.text('keyboard_arrow_left');
        this.$arrowNext.text('keyboard_arrow_right');
      }

      this.$roomName.text(data.roomName);
      if (data.isLuxury === true) {
        this.$luxe.text('Люкс');
      }
      const dailyPriceFormatted = data.dailyPrice.toLocaleString('ru-RU',
        {
          style: 'currency',
          currency: 'RUB',
          minimumFractionDigits: 0,
        });
      this.$dailyPrice.text(dailyPriceFormatted);
    }
  }

  const $rootElements = $('.js-room-card');

  $rootElements.each((index, node) => {
    new RoomCard($(node), dataFromSomewhere[index]);
  });
});
