import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

class RoomCard {
  constructor($rootElement, data = {}) {
    this.$rootElement = $rootElement;
    this.$carouselElement = this.$rootElement.find('.js-room-card__carousel');
    this.hasArrows = this.$carouselElement.data('arrows') === 'on';
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

export default RoomCard;
