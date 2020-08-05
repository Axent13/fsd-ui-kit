const dataFromSomewhere = {
  roomName: '888',
  isLuxury: true,
  dailyPrice: 9990,
  bookingDays: 4,
  discount: 2179,
  additionalServicesPrice: 300,
};

class FormBooking {
  constructor($rootElement, data = {}) {
    this.$rootElement = $rootElement;
    this.$roomName = this.$rootElement.find('.js-form-booking__room-number');
    this.$luxe = this.$rootElement.find('.js-form-booking__luxe');
    this.$dailyPrice = this.$rootElement.find('.js-form-booking__daily-price-currency');
    this.$basePriceDescription = this.$rootElement.find('.js-form-booking__base-price-description');
    this.$basePriceTotal = this.$rootElement.find('.js-form-booking__base-price-currency');
    this.$discountDescription = this.$rootElement.find('.js-form-booking__discount-description');
    this.$additionalServicesPrice = this.$rootElement.find('.js-form-booking__additional-services-currency');
    this.$totalPrice = this.$rootElement.find('.js-form-booking__total-currency');

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

    this.$basePriceDescription.text(`${dailyPriceFormatted} x ${data.bookingDays} суток`);

    const basePriceTotal = data.dailyPrice * data.bookingDays;
    const basePriceTotalFormatted = basePriceTotal.toLocaleString('ru-RU',
      {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
      });
    this.$basePriceTotal.text(basePriceTotalFormatted);

    const discountFormatted = data.discount.toLocaleString('ru-RU',
      {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
      });
    this.$discountDescription.text(`Сбор за услуги: скидка ${discountFormatted}`);

    const additionalServicesPriceFormatted = data.additionalServicesPrice.toLocaleString('ru-RU',
      {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
      });
    this.$additionalServicesPrice.text(additionalServicesPriceFormatted);

    const total = data.dailyPrice * data.bookingDays - data.discount + data.additionalServicesPrice;
    const totalFormatted = total.toLocaleString('ru-RU',
      {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0,
      });
    this.$totalPrice.text(totalFormatted);
  }
}

const $rootElements = $('.js-form-booking');

$rootElements.each((index, node) => {
  new FormBooking($(node), dataFromSomewhere);
});
