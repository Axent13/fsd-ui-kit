import 'air-datepicker';
import 'air-datepicker/dist/css/datepicker.css';

class CardsDatepicker {
  constructor($rootElement) {
    this.$rootElement = $rootElement;
    this.$airDatepicker = this.$rootElement.find('.js-cards__datepicker');
    this.$airDatepicker.datepicker();
  }
}

const $rootElements = $('.js-cards__datepicker-container');

$rootElements.each((index, node) => {
  new CardsDatepicker($(node));
});
