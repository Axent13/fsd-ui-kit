import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const dataFromSomewhere = {
  roomName: '888',
  isLuxury: true,
  dailyPrice: 9990,
};
$(document).ready(() => {
  class RoomCard {
    constructor($rootElement, data = {}) {
      this.$rootElement = $rootElement;
      this.$carouselElement = this.$rootElement.find('.js-room-card__carousel');
      this.hasArrows = this.$carouselElement.data('arrows');
      this.$roomName = this.$rootElement.find('.js-room-card__room-number');
      this.$luxe = this.$rootElement.find('.js-room-card__luxe');
      this.$dailyPrice = this.$rootElement.find('.js-room-card__daily-price-currency');


      this.$carouselElement.owlCarousel({
        items: 1,
        nav: this.hasArrows,
        dots: true,
      });

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
    new RoomCard($(node), dataFromSomewhere);
  });
});
